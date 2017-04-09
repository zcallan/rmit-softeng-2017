const HttpStatus = require('http-status-codes');
const Availability = require('../../../../../models/availability.js');

module.exports = ( req, res ) => {
  const id = req.params.availability;
  Availability.remove({ _id: id}, err => {
    /* If an error occurred, return the error */
    if ( err ) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    return res.json({ success: true });
  });
};
