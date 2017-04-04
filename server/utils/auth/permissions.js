module.exports.hasPermission = ( accessToken, permission ) => {
  if ( accessToken == null || permission == null ) {
    return false;
  }

  if ( permission === 'admin' ) {
    return accessToken.type === 'admin';
  }

  if ( permission === 'employee' ) {
    return accessToken.type === 'admin' || accessToken.type === 'employee';
  }

  return false;
};
