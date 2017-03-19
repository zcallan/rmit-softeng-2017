/**
 * @swagger
 * resourcePath: /register
 * description: Handles user creation
 */

/**
 * @swagger
 * path: /register
 * operations:
 *  - httpMethod: POST
 *    summary: Creates a new user with the provided information
 *    parameters:
 *    - name: firstName
 *      description: Your first name
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: lastName
 *      description: Your last name
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: email
 *      description: Your email address
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
