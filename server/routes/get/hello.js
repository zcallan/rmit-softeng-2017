module.exports = ( req, res, next ) => {
  console.log( 'hello hit' );

  res.json({
    success: true,
    message: 'Hello!',
  });
};
