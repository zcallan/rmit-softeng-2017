const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  strict: true,
});

UsersSchema.pre( 'save', next => {
  this.name.full = `${this.name.first} ${this.name.last}`;
  next();
});

module.exports = mongoose.model( 'Users', UsersSchema );
