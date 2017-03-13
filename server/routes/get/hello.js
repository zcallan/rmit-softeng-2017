/**
 * @swagger
 * resourcePath: /api
 * description: API stuff
 */

/**
 * @swagger
 * path: /hello
 * operations:
 *  - httpMethod: GET
 *    summary: Hello world api endpoint
 */
module.exports = ( req, res, next ) => {
  console.log( 'hello hit' );

  res.json({
    success: true,
    message: 'Hello!',
  });
};
