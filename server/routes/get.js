const config = require('../config/config.json');

module.exports = ( req, res ) => {
  res.json({ name: 'Booka API', version: config.version });
};
