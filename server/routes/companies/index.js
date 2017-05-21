/**
 * @swagger
 * resourcePath: /companies
 * description: Handles companies
 */

/**
 * @swagger
 * path: /companies
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of companies
 */
module.exports.get = require('./get.js');
