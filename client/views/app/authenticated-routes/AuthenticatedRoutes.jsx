import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';


class AuthenticatedRoutes extends Component {
  render() {
    const { authenticated } = this.props.user;

    return ( authenticated )
      ? this.props.children
      : <Redirect to="/login" />;
  }
}

export default AuthenticatedRoutes;
