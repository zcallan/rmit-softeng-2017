const mongoose = require( 'mongoose' );
const config = require( '../../config/config.json' );
const db = mongoose.connection;

/* Use native ES6 promises */
mongoose.Promise = global.Promise;

module.exports.createConnection = () => {
  /* Create the mongoose database connection */
  mongoose.connect( config.databaseUri );
};

module.exports.getConnection = () => {
  return db;
};
