const initialState = {
  authenticated: true,
  authenticating: false,
  registering: false,
  data: null,
  error: null,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
    case 'USER_AUTHENTICATED':
    case 'USER_REGISTERED':
      return {
        ...state,
        authenticated: true,
        authenticating: false,
        data: payload,
        error: null,
      };

    case 'USER_AUTHENTICATING':
      return {
        ...state,
        authenticated: false,
        authenticating: true,
        error: null,
      };

    case 'USER_UNAUTHENTICATED':
      return initialState;

    case 'USER_AUTHENTICATION_FAILED':
      return {
        ...state,
        authenticated: false,
        error: null,
      };

    case 'USER_REGISTERING':
      return {
        ...state,
        registering: true,
        error: null,
      };

    case 'USER_REGISTER_FAILED':
      return {
        ...state,
        registering: false,
        error: payload,
      };

    default:
      return state;
  }
};
