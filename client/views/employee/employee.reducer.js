import moment from 'moment';

const fakeData = [
  {
    id: 0,
    fullName: 'Callan Delbridge',
    email: 'callan@pleasedproperty.com.au',
    schedule: {
      monday: {
        start: moment(),
        end: moment(),
      },
      tuesday: {
        start: moment(),
        end: moment(),
      },
      wednesday: {
        start: moment(),
        end: moment(),
      },
      thursday: {
        start: moment(),
        end: moment(),
      },
      friday: {
        start: moment(),
        end: moment(),
      },
    }
  },
  {
    id: 1,
    fullName: 'Matt Hayward',
    email: 'matt@pleasedproperty.com.au',
  },
];

const initialState = {
  list: fakeData,
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
        fetching: true,
        list: payload,
        error: null,
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
