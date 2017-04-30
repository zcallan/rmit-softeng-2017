export const requestActivities = () => ({
  type: 'REQUESTED_ACTIVITIES',
});

export const receiveActivities = success => ({
  type: 'RECEIVED_ACTIVITIES',
  payload: success.data,
});

export const fetchActivitiesFail = error => ({
  type: 'FETCH_ACTIVITIES_FAILED',
  payload: error,
});
