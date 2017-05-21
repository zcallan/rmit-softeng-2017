/**
 * This application uses a framework called Redux which allows for easy data flow management,
 * through the use of a centralised data store.
 * Redux uses a combination of two different elements, actions and reducers, to make this happen.
 * This file combines all of the reducers into a single reducer.
 */
import { combineReducers } from 'redux';
import sidebar from './sidebar/sidebar.reducer';
import user from './user/user.reducer';
import employees from './employee/employee.reducer';
import customers from './customer/customer.reducer';
import pageTitle from 'views/generic/page-title/pageTitle.reducer';
import activities from 'views/activities/activities.reducer';

export default combineReducers({
  sidebar,
  user,
  employees,
  customers,
  pageTitle,
  activities,
});
