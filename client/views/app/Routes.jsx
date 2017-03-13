import React, { Component, PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
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
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Routes;
