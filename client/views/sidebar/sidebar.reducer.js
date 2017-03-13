export default ( state = false, { type, payload }) => {
  switch ( type ) {
    case 'SIDEBAR_TOGGLE':
      return !state;

    default:
      return state;
  }
}
