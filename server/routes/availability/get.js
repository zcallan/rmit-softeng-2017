const HttpStatus = require('http-status-codes');
const Availability = require( '../../models/availability.js' );

module.exports = ( req, res ) => {
  Availability.find({}, ( err, availabilities ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    return res.json( availabilities.map( employee => employee.toObject()) );
  });
};
