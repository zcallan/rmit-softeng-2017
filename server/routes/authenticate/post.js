const HttpStatus = require('http-status-codes');
const User = require('../../models/user.js');

module.exports = ( req, res ) => {
  /* Retrieve the username and password from the body */
  const { username, password } = req.body;

  /* Check that a username was supplied */
  if ( username == null || username.length == 0 ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'A username must be supplied' });
  }

  /* Check that a password was supplied */
  if ( password == null || password.length == 0 ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'A password must be supplied' });
  }

  /* Check if the user exists */
  User.findOne({ email: username }, ( err, user ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    /* User couldn't be found */
    if ( user == null ) {
      res.status( HttpStatus.NOT_FOUND );
      return res.json({ error: 'The user could not be found' });
    }

    /* Verify the users password */
    user.verifyPassword( password, ( err, match ) => {
      /* If an error occurred, return the error */
      if ( err ) {
        res.status( HttpStatus.INTERNAL_SERVER_ERROR );
        return res.json({ error: err });
      }

      if ( !match ) {
        /* The user had incorrect credentials */
        res.status( HttpStatus.BAD_REQUEST );
        return res.json({ error: 'The username or password provided were incorrect' });
      }

      /* Credentials were correct, return an access token */
      user.generateJWT( ( err, token ) => {
        /* If an error occurred, return the error */
        if ( err ) {
          res.status( HttpStatus.INTERNAL_SERVER_ERROR );
          return res.json({ error: err });
        }

        return res.json({ token, user: user.toObject() });
      });
    });
  });
};
