const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );
const Schema = mongoose.Schema;
const jwt = require( 'jsonwebtoken' );
const config = require( '../config/config.json' );

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
  password: {
    type: String,
    required: true,
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
    return this.name.first + ' ' + this.name.last;
});

/* The following function gets run before the User is saved */
UserSchema.pre( 'save', function( next ) {
  /* Store an encrypted copy of the user password. */
  if ( this.isModified( 'password' )) {
    /* Generate the salt to use in the password hash. */
    bcrypt.genSalt( 5, ( err, salt ) => {
      if ( err )
        return next( err );

      /* Hash the password using the salt and save it to the document. */
      bcrypt.hash( this.password, salt, ( err, hash ) => {
        if ( err )
          return next( err );

        this.password = hash;
        next();
      });
    });
  }
});

/* Provide a method to verify the users password */
UserSchema.methods.verifyPassword = function( password, next ) {
  bcrypt.compare( password, this.password, ( err, match ) => {
    if ( err )
      return next( err );

    next( null, match );
  });
};

/* Provide a method to generate a JWT */
UserSchema.methods.generateJWT = function( next ) {
  jwt.sign( { email: this.email }, config.jwtSecret, {}, ( err, token ) => {
    next( err, token );
  });
};

/* Hide the password from displaying in any responses */
UserSchema.set('toObject', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

module.exports = mongoose.model( 'User', UserSchema );
