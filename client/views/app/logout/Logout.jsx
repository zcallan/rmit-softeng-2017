/* This file provides the logout view of the application */


/* Import any dependencies */
import './logout.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'views/generic';

class Logout extends Component {
  /* Set the inital state of the component */
  state = {
    authenticated: this.props.user.authenticated,
  }

  /* This function gets called when the component loads / mounts */
  componentDidMount() {
    /* Remove the auth information from localStorage */
    localStorage.removeItem( 'auth' );

    /* Tell the parent component that the user has logged out */
    this.props.userLogout();
  }

  /* If the users authentication status updates we need to update the components internal state */
  componentWillReceiveProps( nextProps ) {
    if ( nextProps.user.authenticated !== this.state.authenticated ) {
      this.setState({ authenticated: nextProps.user.authenticated });
    }
  }

  /* This function provides the rendering of this component */
  render() {
    const { authenticated } = this.state;

    /* If the user isn't authenticated redirect to the homepage */
    if ( !authenticated ) {
      return <Redirect to="/" />;
    }

    /* Render the logout message */
    return (
      <Container className="logout">
        <h3>Logging you out, please wait...</h3>
      </Container>
    );
  }
}

export default Logout;
