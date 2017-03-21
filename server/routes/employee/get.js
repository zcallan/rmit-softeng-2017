const HttpStatus = require('http-status-codes');
const User = require( '../../models/user.js' );

module.exports = ( req, res ) => {
  User.find({ type: 'employee' }, ( err, employees ) => {
    /* If an error occurred, return the error */
    if ( err ) {
      res.status( HttpStatus.INTERNAL_SERVER_ERROR );
      return res.json({ error: err });
    }

    return res.json( employees.map( employee => employee.toObject()) );
  });
};
