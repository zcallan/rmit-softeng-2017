import './login.scss';
import React, { Component } from 'react';
import { Container, Input, Button, Form } from 'views/generic';


class Login extends Component {
  handleSubmit = ( event, data ) => {
    // Do your login here
    console.log( data );
  }

  render() {
    return (
      <Container className="login">
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
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
