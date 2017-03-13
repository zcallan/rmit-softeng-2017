import './login.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, Button, ButtonGroup, Form } from 'views/generic';


class Login extends Component {
  state = {
    redirect: false,
  }

  handleSubmit = ( event, data ) => {
    // Do your login here
    this.props.userLogin();
    console.log( data );

    setTimeout(() => {
      this.props.userLoggedIn( data );
      this.setState({ redirect: true });
    }, 500 );
  }

  render() {
    const { redirect } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' }};
    const { authenticated } = this.props.user;

    /* Redirect the user to either their previous location (if from a orivate route), or to home. */
    if ( redirect || authenticated ) {
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
          <Button type="default" submit>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
