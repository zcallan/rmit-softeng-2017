/**
 * @swagger
 * resourcePath: /customer/:id
 * description: Handles retrieving individual customers
 */

/**
 * @swagger
 * path: /customer/{id}
 * operations:
 *  - httpMethod: GET
 *    summary: Returns the customer with the specified email address
 *    parameters:
 *    - name: id
 *      description: Customer email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 *  - httpMethod: DELETE
 *    summary: Deletes the customer with the specified email address
 *    parameters:
 *    - name: id
 *      description: Customer email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 */
module.exports.get = require('./get.js');
module.exports.delete = require('./delete.js');
