export const requestEmployee = employeeId => ({
  type: 'REQUESTED_EMPLOYEE',
  payload: employeeId,
});

export const requestedEmployees = () => ({
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

export const fetchEmployeesFail = error => ({
  type: 'FETCH_EMPLOYEES_FAILED',
  payload: error,
});

export const updateEmployeeSchedule = ( employeeId, schedule, day ) => ({
  type: 'UPDATED_EMPLOYEE_SCHEDULE',
  payload: {
    employeeId,
    schedule,
    day,
  },
});
