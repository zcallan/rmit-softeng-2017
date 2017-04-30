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
