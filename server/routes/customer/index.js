/**
 * @swagger
 * resourcePath: /customer
 * description: Handles customers
 */

/**
 * @swagger
 * path: /customer
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of all the customers
 */
module.exports.get = require( './get.js' );
