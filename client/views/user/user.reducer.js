const initialState = {
  authenticated: false,
  data: null,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        authenticated: true,
        data: payload,
      };

    case 'USER_UNAUTHENTICATED':
      return initialState;

    default:
      return state;
  }
};
