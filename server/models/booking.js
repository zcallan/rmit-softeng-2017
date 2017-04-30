const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

/* Define the schema for bookings */
const BookingSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  madeBy: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  activity: {
    name: {
      type: String,
    },
    duration: {
      type: Number,
    }
  }
}, {
  timestamps: true,
  strict: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

module.exports = mongoose.model( 'Booking', BookingSchema );
