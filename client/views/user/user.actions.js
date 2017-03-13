export const userLogin = () => ({
  type: 'USER_AUTHENTICATING',
});

export const userLoginFail = error => ({
  type: 'USER_AUTHENTICATION_FAILED',
  payload: error,
});

export const userLoggedIn = success => ({
  type: 'USER_AUTHENTICATED',
  payload: success.data,
});

export const userLogout = () => ({
  type: 'USER_UNAUTHENTICATED',
});

export const userRegister = () => ({
  type: 'USER_REGISTERING',
});

export const userRegistered = success => ({
  type: 'USER_REGISTERED',
  payload: success.data,
});

export const userRegisterFail = error => ({
  type: 'USER_REGISTER_FAILED',
  payload: error,
});
