/* Define the inital state of the customers section of the store */
const initialState = {
  list: null,
  fetching: false,
  error: null,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
  case 'REQUESTED_CUSTOMERS':
    return {
      ...state,
      fetching: true,
      error: null,
    };

  case 'RECEIVED_CUSTOMERS':
    return {
      ...state,
      fetching: false,
      list: payload,
      error: null,
    };

  case 'FETCH_CUSTOMERS_FAILED':
    return {
      ...state,
      fetching: false,
      error: true,
    };

  default:
    return state;
  }
};
