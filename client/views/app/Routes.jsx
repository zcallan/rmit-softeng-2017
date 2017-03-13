import React, { Component, PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'views/generic';
import {
	Home,
	Login,
	Register,
	NotFound,
	Logout,
	EmployeeList,
  EmployeeDetails,
  EmployeeRegister,
} from 'views';


class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/logout" component={Logout} />
				<PrivateRoute path="/employee/list" component={EmployeeList} />
				<PrivateRoute path="/employee/details" component={EmployeeDetails} />
				<PrivateRoute path="/employee/create" component={EmployeeRegister} />
				<PrivateRoute exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Routes;
