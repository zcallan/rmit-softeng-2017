const HttpStatus = require('http-status-codes');
const emailValidator = require('email-validator');
const User = require('../../models/user.js');

module.exports = ( req, res ) => {
  const { firstName, lastName, email, password, address, phone } = req.body;

  /* Check that all form fields have been supplied */
  if ( !firstName || firstName.length == 0 ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'A first name must be supplied' });
  }

  if ( !lastName || lastName.length == 0 ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'A last name must be supplied' });
  }

  if ( !email || email.length == 0 ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'A email address must be supplied' });
  }

  if ( !password || password.length == 0 ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'A password must be supplied' });
  }

  if ( password.length < 6 ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'Your password must be at least 6 characters long.' });
  }

  /* Validate that the email address is correct */
  if ( !emailValidator.validate( email ) ) {
    res.status( HttpStatus.BAD_REQUEST );
    return res.json({ error: 'The email address provided is invalid' });
  }

  /* Check whether a user with the same email address already exists */
  User.findOne({ email }, ( err, exists ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    if ( exists ) {
      res.status( HttpStatus.CONFLICT );
      return res.json({ error: 'A user with the provided email address already exists' });
    }

    /* Create the users data */
    const data = {
      name: {
        first: firstName,
        last: lastName,
      },
      email,
      password,
      address,
      phone,
      type: 'customer',
    };

    /* Save the user to the database */
    const user = new User( data );
    user.save( err => {
      /* If an error occurred, return the error */
      if ( err ) {
        res.status( HttpStatus.INTERNAL_SERVER_ERROR );
        return res.json({ error: err });
      }

      /* Generate an access token for the user so we can log them in straightaway */
      user.generateJWT( ( err, token ) => {
        /* If an error occurred, return the error */
        if ( err ) {
          res.status( HttpStatus.INTERNAL_SERVER_ERROR );
          return res.json({ error: err });
        }

        return res.json({ token, user: user.toJSON() });
      });
    });

  });
};
