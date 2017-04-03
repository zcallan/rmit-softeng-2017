import './register.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, InputGroup, Button, Form } from 'views/generic';
import API from 'utils/api/api.js';
import config from 'config/branding.json';

class Register extends Component {
  state = {
    registering: false,
    error: null,
    authenticated: this.props.user.authenticated,
  }

  componentDidMount() {
    document.title = `Register | ${config.companyName}`;
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.user.authenticated !== this.state.authenticated ) {
      this.setState({ authenticated: nextProps.user.authenticated });
    }
  }

  handleSubmit = ( event, data ) => {
    this.setState({ registering: true });

    API.register( data )
      .then(success => {
        this.setState({ registering: false });
        this.props.userAuthenticated( success.data );
      })
      .catch(({ response })  => {
        this.setState({ error: response.data.error, registering: false });
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
        {( error ) && <h5 className="register-error">{error}</h5>}
        <Form onSubmit={this.handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="First name"
              name="firstName"
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              name="lastName"
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
