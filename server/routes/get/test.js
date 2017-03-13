module.exports = ( req, res, next ) => {
  console.log( 'test hit' );

  res.json({
    success: true,
    message: 'Test...',
  });
};
