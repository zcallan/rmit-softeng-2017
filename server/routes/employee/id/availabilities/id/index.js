/**
 * @swagger
 * resourcePath: /employee/:id/availabilities/:availability
 * description: Returns a specific employee availability entry
 */

/**
 * @swagger
 * path: /employee/{id}/availabilities/{availability}
 * operations:
 *  - httpMethod: DELETE
 *    summary: Deletes the specified availability
 *    parameters:
 *    - name: id
 *      description: Employee email address
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 *    - name: availability
 *      description: The ID of the availability to delete
 *      in: path
 *      paramType: path
 *      required: true
 *      dataType: string
 */
module.exports.delete = require('./delete.js');
