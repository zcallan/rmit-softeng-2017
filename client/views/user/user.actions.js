export const userAuthenticateFail = error => ({
  type: 'USER_AUTHENTICATION_FAILED',
  payload: error,
});

export const userAuthenticating = data => ({
  type: 'USER_AUTHENTICATING',
  payload: data,
});

export const userAuthenticated = data => ({
  type: 'USER_AUTHENTICATED',
  payload: data,
});

export const userLogout = () => ({
  type: 'USER_UNAUTHENTICATE',
});

export const userLoggedOut = () => ({
  type: 'USER_UNAUTHENTICATED',
});

export const userRegistered = success => ({
  type: 'USER_REGISTERED',
  payload: success.data,
});
