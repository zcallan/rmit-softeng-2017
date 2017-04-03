/**
 * @swagger
 * resourcePath: /employee/:id
 * description: Handles retrieving individual employees
 */

/**
 * @swagger
 * path: /employee/{id}
 * operations:
 *  - httpMethod: GET
 *    summary: Returns the employee with the specified email address
 *    parameters:
 *    - name: id
 *      description: Employee email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 *  - httpMethod: DELETE
 *    summary: Deletes the employee with the specified email address
 *    parameters:
 *    - name: id
 *      description: Employee email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 */
module.exports.get = require('./get.js');
module.exports.delete = require('./delete.js');
