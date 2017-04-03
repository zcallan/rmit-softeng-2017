const HttpStatus = require('http-status-codes');
const Booking = require('../../../../models/booking.js');

module.exports = ( req, res ) => {
  const email = req.params.id;
  Booking.find({ employee: email }, ( err, bookings ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    return res.json(bookings.map( a => a.toJSON() ));
  });
};
