const rmit = require( '../../config/company/rmit.json' );
const monash = require( '../../config/company/monash.json' );


module.exports = ( req, res ) => {
  res.json({ rmit, monash });
};
