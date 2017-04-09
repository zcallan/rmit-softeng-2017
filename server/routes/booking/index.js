/**
 * @swagger
 * resourcePath: /booking
 * description: Handles bookings
 */

/**
 * @swagger
 * path: /booking
 * operations:
 *  - httpMethod: GET
 *    summary: Returns a list of all the bookings on the system
 *  - httpMethod: POST
 *    summary: Creates a new booking
 *    parameters:
 *    - name: dayOfWeek
 *      description: The day of week for this booking
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: start
 *      description: The start date of this booking as milliseconds since epoch
 *      paramType: form
 *      required: true
 *      dataType: number
 *    - name: end
 *      description: The end time of this booking as milliseconds since epoch
 *      paramType: form
 *      required: true
 *      dataType: number
 *    - name: employee
 *      description: The email address of the employee this booking is for
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: customer
 *      description: The email address of the customer that made this booking
 *      paramType: form
 *      required: true
 *      dataType: string
 */
module.exports.get = require('./get.js');
module.exports.post = require('./post.js');
