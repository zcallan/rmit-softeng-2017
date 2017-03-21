const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

/* Define the schema for availabilities */
const AvailabilitySchema = new Schema({
  dayOfWeek: {
    type: String,
    required: true,
    enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  },
  start: {
    type: Number,
    required: true,
  },
  end: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  strict: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

module.exports = mongoose.model( 'Availability', AvailabilitySchema );
