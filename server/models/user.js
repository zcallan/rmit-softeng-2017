const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );
const Schema = mongoose.Schema;

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
    enum: ['business', 'customer', 'employee', 'admin']
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
    bcrypt.genSalt( 5, function( err, salt ) {
      if ( err )
        return next( err );

      /* Hash the password using the salt and save it to the document. */
      bcrypt.hash( this.password, salt, function( err, hash ) {
        if ( err )
          return next( err );

        this.password = hash;
        next();
      });
    });
  }

  next();
});

/* Provide a method to verify the users password */
UserSchema.methods.verifyPassword = function( password, next ) {
  bcrypt.compare( password, this.password, ( err, match ) => {
    if ( err )
      return next( err );

    next( null, match );
  });
};

module.exports = mongoose.model( 'User', UserSchema );
