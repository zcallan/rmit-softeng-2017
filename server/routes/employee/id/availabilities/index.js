/**
 * @swagger
 * resourcePath: /employee/:id/availabilities
 * description: Returns the specified users availabilities
 */

/**
 * @swagger
 * path: /employee/{id}/availabilities
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of the specified users availabilities
 *    parameters:
 *    - name: id
 *      description: Employee email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 */
module.exports.get = require('./get.js');
