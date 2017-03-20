export const userAuthenticated = data => ({
  type: 'USER_AUTHENTICATED',
  payload: data,
});

export const userLogout = () => ({
  type: 'USER_UNAUTHENTICATED',
});
