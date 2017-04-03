export const setPageTitle = ( title, subtitle )=> ({
  type: 'SET_PAGE_TITLE',
  payload: {
    title,
    subtitle
  },
});
