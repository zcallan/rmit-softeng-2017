const initialState = {
  active: null,
  fetching: false,
  fetched: false,
  error: null,
  list: [],
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
    case 'SET_COMPANY':
      return {
        ...state,
        active: payload,
      };

    case 'REQUESTED_COMPANIES':
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null,
      };

    case 'RECEIVED_COMPANIES':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        list: payload,
        active: state.active ? state.active : payload && Object.keys( payload )[0],
      };

    case 'FETCH_COMPANIES_FAILED':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload,
      };

    default:
      return state;
  }
};
