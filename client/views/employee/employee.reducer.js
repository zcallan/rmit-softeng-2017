const initialState = {
  list: null,
  fetching: false,
  error: null,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
  case 'REQUESTED_EMPLOYEE':
    return {
      ...state,
      fetching: true,
      error: null,
    };

  case 'RECEIVED_EMPLOYEE':
    return {
      ...state,
      fetching: false,
      list: [
        ...state.list,
        payload,
      ],
      error: null,
    };

  case 'REQUESTED_EMPLOYEES':
    return {
      ...state,
      fetching: true,
      error: null,
    };

  case 'RECEIVED_EMPLOYEES':
    return {
      ...state,
      fetching: false,
      list: payload,
      error: null,
    };

  case 'FETCH_EMPLOYEES_FAILED':
    return {
      ...state,
      fetching: false,
      error: true,
    };

  case 'UPDATED_EMPLOYEE_SCHEDULE': {
    const employee = Object.assign( {}, state.list.find( empl => empl.id === payload.employeeId ) );

    if ( employee ) {
      employee.schedule[payload.day] = payload.schedule;
      return {
        ...state,
        list: [
          ...state.list,
        ],
      };
    } else {
      return state;
    }
  }

  default:
    return state;
  }
};
