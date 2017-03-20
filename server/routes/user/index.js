/**
 * @swagger
 * resourcePath: /user
 * description: Handles users
 */

/**
 * @swagger
 * path: /user
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of users on the system
 */
module.exports.get = require('./get.js');
