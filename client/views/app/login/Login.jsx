import './login.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, Button, ButtonGroup, Form } from 'views/generic';


class Login extends Component {
  state = {
    loggingIn: false,
    authenticated: this.props.user.authenticated,
  }

  componentWillReceiveProps( nextProps ) {
    this.setState({ authenticated: nextProps.user.authenticated });
  }

  handleSubmit = ( event, data ) => {
    // Do your login here
    console.log( data );

    this.setState({ loggingIn: true }, () => {
      setTimeout(() => {
        this.props.userLogin( data );
        this.setState({ redirect: true });
      }, 500 );
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' }};
    const { authenticated } = this.props.user;
    const { loggingIn } = this.state;

    /* Redirect the user to either their previous location (if from a orivate route), or to home. */
    if ( authenticated ) {
      return <Redirect to={from} />;
    }

    return (
      <Container className="login">
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <ButtonGroup>
            <Button type="default" icon="person" column>Customer</Button>
            <Button type="default" icon="store_mall_directory" column>Owner</Button>
          </ButtonGroup>
          <Input
            type="text"
            placeholder="Username"
            name="username"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
          />
          <Button type="default" submit disabled={loggingIn}>{loggingIn ? 'Logging in...' : 'Submit'}</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
