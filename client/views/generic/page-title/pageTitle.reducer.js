const initialState = {
  title: '',
  subtitle: '',
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
  case 'SET_PAGE_TITLE':
    return {
      ...state,
      title: payload.title,
      subtitle: payload.subtitle,
    };

  default:
    return state;
  }
};
