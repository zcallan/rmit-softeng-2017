const HttpStatus = require('http-status-codes');
const winston = require('winston');
const Availability = require( '../../models/availability.js' );

module.exports = ( req, res ) => {
  Availability.find({}, ( err, availabilities ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      winston.error('Failed to Retrieve a list of availabilities');
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    return res.json( availabilities.map( employee => employee.toObject()) );
  });
};
