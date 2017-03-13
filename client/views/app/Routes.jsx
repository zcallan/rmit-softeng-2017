import React, { Component, PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'views/generic';
import {
	Home,
	Login,
	Register,
	NotFound,
} from 'views';


class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<PrivateRoute path="/protected" component={Home} />
				<PrivateRoute exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Routes;
