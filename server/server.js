/* Import dependencies */
const express = require( 'express' );
const config = require( './config/config.json' );
const routes = require( './config/routes.json' );
const swagger = require( 'swagger-express' );
const cors = require( 'cors' );

/* Create the HTTP server */
const server = express();

/* Enable CORS. */
server.use( cors() );

server.get('/api-docs', ( req, res ) => {
  res.redirect('/swagger?url=/api-docs.json');
});

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
  const requiredRoute = require( route.handler );

  Object.keys( requiredRoute ).forEach( method => {
    server[method]( route.path, requiredRoute[method]);
  });
});

server.listen( config.port, () => {
  console.log( `Server listening on ${config.port}` );
});
