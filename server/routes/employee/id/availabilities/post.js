const HttpStatus = require('http-status-codes');
const Availability = require('../../../../models/availability.js');
const validDaysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

module.exports = ( req, res ) => {
  const email = req.params.id;
  let { dayOfWeek, start, end } = req.body;

  /* Validate the input */
  if ( !dayOfWeek || dayOfWeek === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'Day of week must be provided'});
  }

  if ( start == null || start === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'Start time must be provided'});
  }

  if ( end == null || end === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'End time must be provided'});
  }

  if ( validDaysOfWeek.indexOf(dayOfWeek) < 0 ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: `A valid day of week must be provided. Accepted values are ${validDaysOfWeek.join(', ')}`});
  }

  /* Convert start and end to numbers */
  start = parseInt(start);
  end = parseInt(end);

  if ( start < 0 || start > 1440) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'Start value must be between 0 and 86400000 (inclusive)' });
  }

  if ( end < 0 || end > 1440) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'End value must be between 0 and 86400000 (inclusive)' });
  }

  if ( end <= start ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'End value must be greater than start value' });
  }

  const data = {
    dayOfWeek,
    start,
    end,
    user: email,
  };

  Availability.findOne( data, ( error, exists ) => {
    /* If an error occurred, return the error */
    if ( error ) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error });
    }

    if ( exists ) {
      res.status( HttpStatus.CONFLICT );
      return res.json({ error: 'That availability already exists in the system for this user' });
    }

    /* Data is all valid, create availability entry */
    const availability = new Availability( data );

    availability.save( err => {
      /* If an error occurred, return the error */
      if ( err ) {
        res.status( HttpStatus.INTERNAL_SERVER_ERROR );
        return res.json({ error: err });
      }

      return res.json(availability.toJSON());
    });
  });
};
