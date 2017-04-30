const activities = require('../../config/activities.json');

module.exports = ( req, res ) => {
  res.json( activities );
};
