/**
 * @swagger
 * resourcePath: /availability
 * description: Handles availabilities for the entire company
 */

/**
 * @swagger
 * path: /availability
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of availabilities for the system
 */
module.exports.get = require('./get.js');
