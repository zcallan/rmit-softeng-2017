/* Import dependencies */
const express = require( 'express' );
const config = require( './config/config.json' );
const routes = require( './config/routes.json' );
const swagger = require( 'swagger-express' );
const cors = require( 'cors' );
const bodyParser = require( 'body-parser' );
const graphqlHTTP = require('express-graphql');
const winston = require('winston');

const db = require( './utils/db/db.js' );
const users = require( './utils/users/index.js' );
const schema = require( './utils/graphql/graphql.js' );
const auth = require( './utils/auth/auth.js' );

/* Create the HTTP server */
const server = express();

/* Enable graphql support */
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

/* Enable CORS. */
server.use( cors() );

/* Add authentication middleware */
server.use( auth );

/* Tell the server to use both JSON body parsing and form data body parsing */
server.use( bodyParser.urlencoded({ extended: false }) );
server.use( bodyParser.json() );

/* Setup the logging framework */
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp:true });
winston.add(winston.transports.File, { filename: 'server.log', timestamp: true });

/* Log all requests */
server.use(( req, res, next ) => {
  winston.info(`${req.method} request to - ${req.url}`);
  next();
});

/* Create a redirect from /api-docs to swagger, loading the correct swagger API specification */
server.get('/api-docs', ( req, res ) => {
  res.redirect('/swagger?url=/api-docs.json');
});

/* Create a static route to load the Swagger UI */
server.use('/swagger', express.static(`${__dirname}/public/swagger-ui/dist`));

/* Enable swagger */
server.use(
  swagger.init( server, Object.assign( {},
    config.swagger,
    {
      apis: routes.map( route => `${__dirname}/${route.handler.replace( '.', '' )}` ),
      middleware: () => {},
    }
  ))
);

/* Create an endpoint for each route in the config. */
routes.forEach( route => {
  /* Load the module set as the router handler */
  const requiredRoute = require( route.handler );

  /* Loop through the methods defined on the module and map it to a server handler */
  Object.keys( requiredRoute ).forEach( method => {
    server[method]( route.path, requiredRoute[method]);
    winston.info( `Loaded ${method.toUpperCase()} route ${route.path}` );
  });
});

/* Create and retrieve the database connection */
db.createConnection();
const connection = db.getConnection();

/* When the database connection is opened, start the server */
connection.once( 'open', () => {
  winston.info( 'Opened database connected' );

  server.listen( config.port, () => {
    winston.info( `Server listening on ${config.port}` );
  });

  /* Create the default user accounts if they don't exist */
  users.createDefaultUser();
});
