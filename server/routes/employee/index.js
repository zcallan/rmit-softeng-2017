/**
 * @swagger
 * resourcePath: /employee
 * description: Handles employees
 */

/**
 * @swagger
 * path: /employee
 * operations:
 *  - httpMethod: POST
 *    summary: Creates a new employee with the provided information
 *    parameters:
 *    - name: firstName
 *      description: Employee's first name
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: lastName
 *      description: Employee's last name
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: email
 *      description: Employee's email address
 *      paramType: form
 *      required: true
 *      dataType: string
 *    - name: password
 *      description: Employee's password
 *      paramType: form
 *      required: true
 *      dataType: string
 */
module.exports.get = require( './get.js' );
