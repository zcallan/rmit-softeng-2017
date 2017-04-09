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
 *    summary: Returns a list of the specified employees availabilities
 *    parameters:
 *    - name: id
 *      description: Employee email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 *  - httpMethod: POST
 *    summary: Creates a availability entry for this employee
 *    parameters:
 *    - name: id
 *      description: Employee email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 *    - name: dayOfWeek
 *      description: The day of week for this availability entry
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: start
 *      description: The start time of the availability entry, measured in seconds past midnight
 *      paramType: form
 *      required: true
 *      dataType: number
 *    - name: end
 *      description: The end time of the availability entry, measured in seconds past midnight
 *      paramType: form
 *      required: true
 *      dataType: number
 */
module.exports.get = require('./get.js');
module.exports.post = require('./post.js');
