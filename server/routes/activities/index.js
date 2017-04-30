/**
 * @swagger
 * resourcePath: /activities
 * description: Handles activities
 */

/**
 * @swagger
 * path: /activities
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of activities
 */
module.exports.get = require('./get.js');
