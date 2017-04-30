const HttpStatus = require('http-status-codes');
const winston = require('winston');
const User = require( '../../models/user.js' );

module.exports = ( req, res ) => {
  User.find({ type: 'employee' }, ( err, employees ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      winston.error('An error occured attempting to retrieve a list of employees');
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    return res.json( employees.map( employee => employee.toJSON()) );
  });
};
