const User = require('../../models/users.js');

module.exports = ( req, res ) => {
  const user = new User({
    name: {
      first: 'Matt',
      last: 'Hayward'
    },
    email: 'matthayward1997@gmail.com',
    password: 'password',
    type: 'admin',
  });

  user.save( err => {
    if ( err ) {
      res.status(400);
      res.json({ error: err.code, errorMsg: err.errmsg });
      return;
    }

    res.status(201);
    res.json(user);
    return;
  });
};
