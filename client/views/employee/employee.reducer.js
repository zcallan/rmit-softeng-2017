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

    default:
      return state;
  }
};
