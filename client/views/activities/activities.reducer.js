/* This file defines the reducer for activities */

/* Define the initial state of the activities section of the store */
const initialState = {
  list: null,
  fetching: false,
  error: null,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
  case 'REQUESTED_ACTIVITIES':
    return {
      ...state,
      fetching: true,
      error: null,
    };

  case 'RECEIVED_ACTIVITIES':
    return {
      ...state,
      fetching: false,
      list: payload,
      error: null,
    };

  case 'FETCH_ACTIVITIES_FAILED':
    return {
      ...state,
      fetching: false,
      error: true,
    };

  default:
    return state;
  }
};
