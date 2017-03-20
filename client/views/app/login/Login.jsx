import './login.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, Button, ButtonGroup, Form } from 'views/generic';
import API from 'utils/api/api.js';


class Login extends Component {
  state = {
    loggingIn: false,
    authenticated: this.props.user.authenticated,
    error: null,
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
        <h2>Login</h2>
        {( error ) && <h5 className="login-error">{error}</h5>}
        <Form onSubmit={this.handleSubmit}>
          <ButtonGroup>
            <Button type="default" icon="person" column>Customer</Button>
            <Button type="default" icon="store_mall_directory" column>Owner</Button>
          </ButtonGroup>
          <Input
            type="text"
            placeholder="Email"
            name="username"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
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
