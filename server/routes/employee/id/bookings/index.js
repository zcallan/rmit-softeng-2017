/**
 * @swagger
 * resourcePath: /employee/:id/bookings
 * description: Returns a list of the employees bookings
 */

/**
 * @swagger
 * path: /employee/{id}/bookings
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of the specified employees bookings
 *    parameters:
 *    - name: id
 *      description: Employee email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 */
module.exports.get = require('./get.js');
