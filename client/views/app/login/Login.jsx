import './login.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, Button, Form, Error } from 'views/generic';
import API from 'utils/api/api.js';
import config from 'config/branding.json';

class Login extends Component {
  state = {
    loggingIn: false,
    authenticated: this.props.user.authenticated,
    error: null,
  }

  componentDidMount() {
    document.title = `Login | ${config.companyName}`;
    this.props.setPageTitle( 'Login', 'You can login on this page using your username and password' );
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.user.authenticated !== this.state.authenticated ) {
      this.setState({ authenticated: nextProps.user.authenticated });
    }
  }

  handleSubmit = ( event, data ) => {
    this.setState({ loggingIn: true });

    API.authenticate( data )
      .then(({ data }) => {
        this.setState({ loggingIn: false });
        /* Store the user information and token in local storage */
        localStorage.setItem( 'auth', JSON.stringify( data ));
        this.props.userAuthenticated( data );
      })
      .catch(({ response })  => {
        this.setState({ error: response.data.error, loggingIn: false });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' }};
    const { loggingIn, authenticated, error } = this.state;

    /* Redirect the user to either their previous location (if from a private route), or to home. */
    if ( authenticated ) {
      return <Redirect to={from} />;
    }

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
