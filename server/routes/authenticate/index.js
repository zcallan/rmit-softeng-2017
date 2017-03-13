/**
 * @swagger
 * resourcePath: /authentication
 * description: Handles user authentication
 */

/**
 * @swagger
 * path: /authentication
 * operations:
 *  - httpMethod: POST
 *    summary: Authenticates the user
 */
module.exports.post = require('./post.js');
