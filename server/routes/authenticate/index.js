/**
 * @swagger
 * resourcePath: /authenticate
 * description: Handles user authentication
 */

/**
 * @swagger
 * path: /authenticate
 * operations:
 *  - httpMethod: POST
 *    summary: Authenticates the user with the provided username and password
 *    parameters:
 *    - name: username
 *      description: Your username / email address
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: password
 *      description: Your password
 *      paramType: form
 *      required: true
 *      dataType: string
 */
module.exports.post = require('./post.js');
