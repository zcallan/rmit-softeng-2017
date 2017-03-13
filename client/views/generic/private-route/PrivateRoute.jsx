import React, { Component, PropTypes } from 'react';
import { Redirect, Route } from 'react-router-dom';


class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.func,
    user: PropTypes.object,
  }

  render() {
    const { component, user, ...restProps } = this.props;

    return (
      <Route
        {...restProps}
        render={props => (
          user.authenticated ? (
            React.createElement( component, props )
          ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
            }} />
          )
        )}
      />
    );
  }
}

export default PrivateRoute;
