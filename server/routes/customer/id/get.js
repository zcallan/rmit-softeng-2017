const HttpStatus = require('http-status-codes');
const winston = require('winston');
const User = require('../../../models/user.js');


module.exports = ( req, res ) => {
  const email = req.params.id;
  User.findOne({ email, type: 'customer' }, ( err, user ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      winston.error(`An error occured attempting to retrieve the user with email ${email}`);
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    if ( !user ) {
      res.status( HttpStatus.NOT_FOUND );
      return res.json({ error: 'The user could not be found' });
    }

    return res.json(user.toJSON());
  });
};
