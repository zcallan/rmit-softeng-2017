const User = require('../../models/user.js');

module.exports = ( req, res ) => {
  User.find({}, ( err, users ) => {
    res.json( users.map( user => user.toJSON() ) );
  });
};
