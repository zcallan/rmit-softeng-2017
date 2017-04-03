const Booking = require('../../models/booking.js');

module.exports = ( req, res ) => {
  Booking.find({}, ( err, bookings ) => {
    res.json( bookings.map( booking => booking.toJSON() ) );
  });
};
