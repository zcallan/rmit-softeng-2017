const User = require( '../../models/user.js' );
const config = require( '../../config/users.json' );

module.exports = () => {
  /* Loop through the list of default users and make sure they exist */
  config.defaultUsers.forEach( user => {
    User.findOne({ email: user.email }, ( err, result ) => {
      if ( err ) { console.error( err ); return; }

      if ( result == null ) {
        /* The user doesn't exist, lets create them */
        const newUser = new User( user );
        /* Save the user to the database */
        newUser.save( err => {
          if ( err ) { console.error( err ); return; }

          console.log( `Created default user with name ${newUser.name.full}` );
        });
      }
    });
  });
};
