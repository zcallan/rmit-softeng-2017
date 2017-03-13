export const requestEmployee = employeeId => ({
  type: 'REQUESTED_EMPLOYEE',
  payload: employeeId,
});

export const requestEmployees = () => ({
  type: 'REQUESTED_EMPLOYEES',
});

export const receivedEmployee = employee => ({
  type: 'RECEIVED_EMPLOYEE',
  payload: employee,
});

export const receivedEmployees = employees => ({
  type: 'RECEIVED_EMPLOYEES',
  payload: employees,
});

export const fetchEmployeesFail = () => ({
  type: 'FETCH_EMPLOYEES_FAILED',
});
