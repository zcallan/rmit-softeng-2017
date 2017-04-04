/**
 * @swagger
 * resourcePath: /customer/:id/bookings
 * description: Returns a list of bookings made for by this customer
 */

/**
 * @swagger
 * path: /customer/{id}/bookings
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of the specified customers bookings
 *    parameters:
 *    - name: id
 *      description: Customer email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 */
module.exports.get = require('./get.js');
