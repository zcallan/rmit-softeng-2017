import { combineReducers } from 'redux';
import sidebar from './sidebar/sidebar.reducer';
import user from './user/user.reducer';
import employees from './employee/employee.reducer';


export default combineReducers({
	sidebar,
	user,
	employees,
});
