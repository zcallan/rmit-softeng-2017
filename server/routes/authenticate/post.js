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
    if (err) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    res.json( user.toObject() );
  });
};
