export const setCompany = company => ({
  type: 'SET_COMPANY',
  payload: company,
});

export const requestCompanies = () => ({
  type: 'REQUESTED_COMPANIES',
});

export const receiveCompanies = companies => ({
  type: 'RECEIVED_COMPANIES',
  payload: companies,
});

export const failCompanies = error => ({
  type: 'FETCH_COMPANIES_FAILED',
  payload: error,
});
