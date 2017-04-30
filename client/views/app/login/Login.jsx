/* This file provides the Login view of the application */

/* Require dependencies */
import './login.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, Button, Form, Error } from 'views/generic';
import API from 'utils/api/api.js';
import config from 'config/branding.json';

class Login extends Component {
  /* Set the initial state of this component */
  state = {
    loggingIn: false,
    authenticated: this.props.user.authenticated,
    error: null,
  }

  /* When the component mounts / loads set the page title */
  componentDidMount() {
    document.title = `Login | ${config.companyName}`;
    this.props.setPageTitle( 'Login', 'You can login on this page using your username and password' );
  }

  /* Check whether the user has authenticated and update this components state */
  componentWillReceiveProps( nextProps ) {
    if ( nextProps.user.authenticated !== this.state.authenticated ) {
      this.setState({ authenticated: nextProps.user.authenticated });
    }
  }

  /* This function handles the submission of the login form */
  handleSubmit = ( event, data ) => {
    /* Update the state of the component to be loggingIn */
    this.setState({ loggingIn: true });

    /* Make an authentication request to the API using the login credentials */
    API.authenticate( data )
      .then(({ data }) => {
        /* Update the state of the component */
        this.setState({ loggingIn: false });
        /* Store the user information and token in local storage */
        localStorage.setItem( 'auth', JSON.stringify( data ));
        this.props.userAuthenticated( data );
        /* Update the access token the API client / library uses */
        API.setToken( data.token );
      })
      .catch(({ response })  => {
        /* There was an error logging it, store the error in the state of the component */
        this.setState({ error: response.data.error, loggingIn: false });
      });
  }

  /* This function provides the rendering of this component */
  render() {
    /* Get the previous page that was loaded so we can redirect to it once logged in */
    const { from } = this.props.location.state || { from: { pathname: '/' }};
    const { loggingIn, authenticated, error } = this.state;

    /* Redirect the user to either their previous location (if from a private route), or to home. */
    if ( authenticated ) {
      return <Redirect to={from} />;
    }

    /* Render the login form and any errors that may have occured */
    return (
      <Container className="login">
        {( error ) && <Error>{error}</Error>}
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Email"
            name="username"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Button type="default" submit disabled={loggingIn} loading={loggingIn}>
            {( loggingIn ) ? 'Logging in...' : 'Login'}
            </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
