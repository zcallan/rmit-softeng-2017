/**
 * @swagger
 * resourcePath: /
 * description: Basic system information
 */

/**
 * @swagger
 * path: /
 * operations:
 *  - httpMethod: GET
 *    summary: Prints basic information about the system
 */
module.exports.get = require('./get.js');
