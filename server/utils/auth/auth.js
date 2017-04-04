const routes = require( '../../config/routes.json' );
const config = require( '../../config/config.json' );
const RoutePattern = require( 'route-pattern' );
const jwt = require( 'jsonwebtoken' );
const permissions = require( './permissions' );

module.exports = ( req, res, next ) => {
  /* Pull the required permissions for this route */
  let routePermissions = [];

  routes.forEach( route => {
    const pattern = RoutePattern.fromString( route.path );
    if (pattern.matches( req.url )) {
      routePermissions = route.permissions || [];
    }
  });

  /* Check whether a token is specified in the header */
  if ( req.headers.authorization ) {
    const token = req.headers.authorization.replace('Bearer', '').trim();

    /* If the token is empty return an error */
    if ( token == '' ) {
      res.status( 401 );
      return res.json({
        error: 'Invalid access token'
      });
    }

    /* Verify the token */
    jwt.verify(token, config.jwtSecret, (err, authToken) => {
      if ( err ) {
        res.status( 401 );
        res.json({
          error: 'Invalid access token'
        });
      } else {
        /* Token is valid, check whether user has all permissions */
        for ( let i = 0; i < routePermissions.length; i++ ) {
          if ( !permissions.hasPermission( authToken, routePermissions[i] )) {
            /* User doesn't have permission to do this, return an error */
            res.status( 403 );
            return res.json({
              error: 'You are forbidden to access this resource',
            });
          }
        }
        /* User has passed all permissions, continue on */
        next();
      }
    });
  } else {
    if ( permissions.length > 0 ) {
      res.status( 403 );
      res.json({
        error: 'You are forbidden to access this resource',
      });
    } else {
      next();
    }
  }
};
