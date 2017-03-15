const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );
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
  /* Concatenate first and last name for convenience. */
  this.name.full = `${this.name.first} ${this.name.last}`;

  /* Store an encrypted copy of the user password. */
  if ( this.isModified( 'password' )) {
    /* Generate the salt to use in the password hash. */
    bcrypt.genSalt( 5, ( err, salt ) => {
      if ( err )
        return next( err );

      /* Hash the password using the salt and save it to the document. */
      bcrypt.hash( this.password, salt, null, ( err, hash ) => {
        if ( err )
          return next( err );

        this.password = hash;
        next();
      });
    });
  }

  next();
});

UsersSchema.methods.verifyPassword = ( password, next ) => {
  bcrypt.compare( password, this.password, ( err, match ) => {
    if ( err )
      return next( err );

    next( null, match );
  });
};

module.exports = mongoose.model( 'Users', UsersSchema );
