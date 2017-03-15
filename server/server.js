/* Import dependencies */
const express = require( 'express' );
const config = require( './config/config.json' );
const routes = require( './config/routes.json' );
const swagger = require( 'swagger-express' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );

/* Create the mongoose database connection */
mongoose.connect( config.databaseUri );

/* Create the HTTP server */
const server = express();
const db = mongoose.connection;

/* Enable CORS. */
server.use( cors() );

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
  });
});

/* If the connection failed log an error */
db.on( 'error', console.error.bind( console.log('MongoDB connection failed')));

/* When the database connection is opened, start the server */
db.once( 'open', () => {
  console.log( '=> Started MongoDB' );

  server.listen( config.port, () => {
    console.log( `Server listening on ${config.port}` );
  });
});
