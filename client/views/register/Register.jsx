import './register.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, InputGroup, Button, Form } from 'views/generic';


class Register extends Component {
  handleSubmit = ( event, data ) => {
    // Do your register here
    console.log( data );
  }

  render() {
    const { authenticated } = this.props.user;

    if ( authenticated ) {
      return <Redirect to="/" />;
    }
    
    return (
      <Container className="register">
        <h2>Register</h2>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="First name"
              name="firstname"
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              name="lastname"
              required
            />
          </InputGroup>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Button type="default" submit>Register</Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
