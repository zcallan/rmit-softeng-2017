import { combineReducers } from 'redux';
import sidebar from './sidebar/sidebar.reducer';
import user from './user/user.reducer';
import employees from './employee/employee.reducer';
import pageTitle from 'views/generic/page-title/pageTitle.reducer';

export default combineReducers({
  sidebar,
  user,
  employees,
  pageTitle,
});
