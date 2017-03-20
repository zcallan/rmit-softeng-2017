/**
 * @swagger
 * resourcePath: /user/:id
 * description: Handles retrieving individual users
 */

/**
 * @swagger
 * path: /user/{id}
 * operations:
 *  - httpMethod: GET
 *    summary: Returns the user with the specified email address
 *    parameters:
 *    - name: id
 *      description: Users email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 *  - httpMethod: DELETE
 *    summary: Deletes the user with the specified email address
 *    parameters:
 *    - name: id
 *      description: Users email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 */
module.exports.get = require('./get.js');
module.exports.delete = require('./delete.js');
