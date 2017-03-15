export const userLoginFail = error => ({
  type: 'USER_AUTHENTICATION_FAILED',
  payload: error,
});

export const userLogin = success => ({
  type: 'USER_AUTHENTICATED',
  payload: success.data,
});

export const userLogout = () => ({
  type: 'USER_UNAUTHENTICATED',
});

export const userRegistered = success => ({
  type: 'USER_REGISTERED',
  payload: success.data,
});
