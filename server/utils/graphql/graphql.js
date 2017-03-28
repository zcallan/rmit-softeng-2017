const { getSchema } = require( '@risingstack/graffiti-mongoose' );

/* Import all the models */
const User = require( '../../models/user.js' );
const Availability = require( '../../models/availability.js' );

const options = {
  allowMongoIDMutation: false, // Disable mutation of mongo ID's
};

/* Create the graphQL schema */
const schema = getSchema([
  User,
  Availability,
], options);

/* Export the schema */
module.exports = schema;
