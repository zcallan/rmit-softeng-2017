import React, { Component } from 'react';
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
	Test,
	Bookings,
} from 'views';

class Routes extends Component {
  render() {
    return (
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/logout" component={Logout} />
				<Route path="/test" component={Test} />
				<PrivateRoute path="/employee/list" component={EmployeeList} />
				<PrivateRoute path="/employee/:id/details" component={EmployeeDetails} />
				<PrivateRoute path="/employee/create" component={EmployeeRegister} />
				<PrivateRoute path="/bookings" component={Bookings} />
				<PrivateRoute exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
    );
  }
}

export default Routes;
