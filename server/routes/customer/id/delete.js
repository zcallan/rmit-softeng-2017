const HttpStatus = require('http-status-codes');
const winston = require('winston');
const User = require('../../../models/user.js');


module.exports = ( req, res ) => {
  const email = req.params.id;
  winston.info(`Attempting to delete the customer with the email ${email}`);
  User.remove({ email, type: 'customer' }, ( err ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      winston.error(`Failed to delete the customer with the email ${email}`);
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    winston.error(`Successfully deleted the customer with the email ${email}`);
    return res.json({ success: true });
  });
};
