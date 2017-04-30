const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );
const Schema = mongoose.Schema;
const jwt = require( 'jsonwebtoken' );
const config = require( '../config/config.json' );
const winston = require('winston');

/* Define the schema for the user */
const UserSchema = new Schema({
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
  address: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long.'],
  },
  type: {
    type: String,
    required: true,
    enum: ['customer', 'employee', 'admin']
  }
}, {
  timestamps: true,
  strict: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

/* Create a virtual field that concatenates the users first and last names for convenience */
UserSchema.virtual('name.full').get( function() {
  return `${this.name.first} ${this.name.last}`;
});

/* The following function gets run before the User is saved */
UserSchema.pre( 'save', function( next ) {
  /* Store an encrypted copy of the user password. */
  if ( this.isModified( 'password' )) {
    /* Generate the salt to use in the password hash. */
    winston.info(`Salting password for user ${this.email}`);
    bcrypt.genSalt( 5, ( err, salt ) => {
      if ( err ) {
        winston.error( err );
        return next( err );
      }

      /* Hash the password using the salt and save it to the document. */
      bcrypt.hash( this.password, salt, ( err, hash ) => {
        if ( err ) {
          winston.error( err );
          return next( err );
        }

        winston.info(`Password salted for user ${this.email}`);
        this.password = hash;
        next();
      });
    });
  }
});

/* Provide a method to verify the users password */
UserSchema.methods.verifyPassword = function( password, next ) {
  winston.info(`Attempting to verify password for user ${this.email}`);
  bcrypt.compare( password, this.password, ( err, match ) => {
    if ( err ) {
      winston.error( err );
      return next( err );
    }

    if ( match ) {
      winston.info(`Successfully verified password for user ${this.email}`);
    } else {
      winston.info(`Failed to verify password for user ${this.email}`);
    }
    next( null, match );
  });
};

/* Provide a method to generate a JWT */
UserSchema.methods.generateJWT = function( next ) {
  jwt.sign( { email: this.email, type: this.type }, config.jwtSecret, { expiresIn: '6h' }, ( err, token ) => {
    winston.info(`Generated JWT for user ${this.email}`);
    next( err, token );
  });
};

/* Hide the password from displaying in any responses */
UserSchema.set('toObject', {
  transform: function(doc, user) {
    delete user.password;
    return user;
  }
});

module.exports = mongoose.model( 'User', UserSchema );
