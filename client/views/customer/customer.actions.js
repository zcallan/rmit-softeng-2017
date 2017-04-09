export const requestedCustomers = () => ({
  type: 'REQUESTED_CUSTOMERS',
});

export const receivedCustomers = customers => ({
  type: 'RECEIVED_CUSTOMERS',
  payload: customers,
});

export const fetchCustomersFail = error => ({
  type: 'FETCH_CUSTOMERS_FAILED',
  payload: error,
});
