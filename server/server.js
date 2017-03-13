const restify = require( 'restify' );
const config = require( './config/config.json' );
const routes = require( './config/routes.json' );

const server = restify.createServer();


/* Enable CORS. */
server.use( restify.CORS());

/* Create an endpoint for each route in the config. */
routes.forEach( route => {
  server[route.method]( route.path, require( route.handler ));
});

server.listen( config.port, () => {
  console.log( `Server listening on ${config.port}` );
});
