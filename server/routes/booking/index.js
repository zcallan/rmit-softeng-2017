/**
 * @swagger
 * resourcePath: /booking
 * description: Handles bookings
 */

/**
 * @swagger
 * path: /booking
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of all the bookings on the system
 */
module.exports.get = require('./get.js');
