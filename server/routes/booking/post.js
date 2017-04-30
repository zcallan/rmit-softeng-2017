const HttpStatus = require('http-status-codes');
const Booking = require('../../models/booking.js');
const Availability = require('../../models/availability.js');
const validDaysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const moment = require('moment');
const winston = require('winston');

module.exports = ( req, res ) => {
  let { dayOfWeek, start, end, employee, customer, activity } = req.body;

  /* Validate the input */
  if ( !dayOfWeek || dayOfWeek === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'Day of week must be provided'});
  }

  if ( start == null || start === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'Start date must be provided'});
  }

  if ( end == null || end === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'End date must be provided'});
  }

  if ( employee == null || employee === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'Employee must be provided'});
  }

  if ( customer == null || customer === '' ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'Customer must be provided'});
  }

  if ( validDaysOfWeek.indexOf(dayOfWeek) < 0 ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: `A valid day of week must be provided. Accepted values are ${validDaysOfWeek.join(', ')}`});
  }

  /* Convert start and end to numbers */
  start = parseInt(start) + ( validDaysOfWeek.indexOf(dayOfWeek ) * 1440 * 60000 );
  end = parseInt(end) + ( validDaysOfWeek.indexOf(dayOfWeek ) * 1440 * 60000 );

  /* Make sure end is greater than start */
  if ( end <= start ) {
    res.status(HttpStatus.BAD_REQUEST);
    return res.json({ error: 'End value must be greater than start value' });
  }

  /* Convert to dates */
  const startDate = moment( start );
  const endDate = moment( end );

  /* Calculate midnight */
  const midnight = startDate.clone().startOf('day');

  /* Convert dates to minutes past midnight */
  const startMinutes = startDate.diff( midnight, 'minutes' );
  const endMinutes = endDate.diff( midnight, 'minutes' );

  /* Now let's see if the employee is available at that time */
  Availability.find({ user: employee, dayOfWeek }).where('start').lte(endMinutes).where('end').gte(startMinutes).exec(( err, availabilities ) => {

    if ( err || availabilities == null || availabilities.length == 0 ) {
      res.status(HttpStatus.BAD_REQUEST);
      return res.json({ error: 'The employee cannot be booked at this time'});
    }

    /* Now lets see if they have any bookings during this time */
    Booking.find({ employee: employee }).where('startDate').lte(end).where('endDate').gt(start).exec(( err, bookings ) => {

      if ( err || bookings == null || bookings.length > 0 ) {
        res.status(HttpStatus.BAD_REQUEST);
        return res.json({ error: 'The employee cannot be booked at this time as they already have a booking'});
      }

      /* Create the data for the booking */
      const bookingData = {
        startDate: start,
        endDate: end,
        madeBy: customer,
        employee,
        activity,
      };

      winston.info('Attempting to create new booking');
      const booking = new Booking( bookingData );
      booking.save( err => {
        /* If an error occurred, return the error */
        if ( err ) {
          winston.error(`Failed to create new booking - ${err}`);
          res.status( HttpStatus.INTERNAL_SERVER_ERROR );
          return res.json({ error: err });
        }

        winston.info('Created a new booking');
        return res.json(booking.toJSON());
      });
    });
  });
};
