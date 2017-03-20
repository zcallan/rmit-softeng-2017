const initialState = {
  authenticated: false,
  token: '',
  data: null,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        authenticated: true,
        token: payload.token,
        data: payload.user,
      };

    case 'USER_UNAUTHENTICATED':
      return initialState;

    default:
      return state;
  }
};
