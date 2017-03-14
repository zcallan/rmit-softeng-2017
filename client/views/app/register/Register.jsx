import './register.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, InputGroup, Button, Form } from 'views/generic';


class Register extends Component {
  state = {
    registering: false,
    registered: false,
    error: null,
    authenticated: this.props.user.authenticated,
  }

  componentWillReceiveProps( nextProps ) {
    this.setState({ authenticated: nextProps.user.authenticated });
  }

  handleSubmit = ( event, data ) => {
    // Do your register here
    console.log( data );

    this.setState({ registering: true }, () => {
      setTimeout(() => {
        this.setState({ registered: true });
        this.props.userLogin( data );
      }, 500 );
    });
  }

  render() {
    const { registering, authenticated, error } = this.state;

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
            placeholder="Email"
            name="email"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Button type="default" submit disabled={registering} loading={registering}>
            {( registering ) ? 'Registering...' : 'Register'}
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
