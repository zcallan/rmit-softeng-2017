/* This file defines the Register view */

/* Import the dependencies */
import './register.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, InputGroup, Button, Form, Error } from 'views/generic';
import API from 'utils/api/api.js';
import config from 'config/branding.json';

/* Create the Register component */
class Register extends Component {
  /* Define the components initial state */
  state = {
    registering: false,
    error: null,
    authenticated: this.props.user.authenticated,
  }

  /* When the component mounts set the page title */
  componentDidMount() {
    document.title = `Register | ${config.companyName}`;
    this.props.setPageTitle( 'Register', 'On this page you can create a new customer account' );
  }

  /* Make sure the the components internal state matches the store */
  componentWillReceiveProps( nextProps ) {
    if ( nextProps.user.authenticated !== this.state.authenticated ) {
      this.setState({ authenticated: nextProps.user.authenticated });
    }
  }

  /* This functions handles form submissions */
  handleSubmit = ( event, data ) => {
    this.setState({ registering: true });

    /* Make a registration request via the API */
    API.register( data )
      .then(success => {
        /* Registration was completed, authenticate the user */
        this.setState({ registering: false });
        this.props.userAuthenticated( success.data );
      })
      .catch(({ response })  => {
        /* There was an error registering this user */
        this.setState({ error: response.data.error, registering: false });
      });
  }

  /* This function renders the view */
  render() {
    const { registering, authenticated, error } = this.state;

    /* If the user is already authenticated redirect to the homepage */
    if ( authenticated ) {
      return <Redirect to="/" />;
    }

    /* Render the registration form */
    return (
      <Container className="register">
        {( error ) && <Error>{error}</Error>}
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
          <InputGroup>
            <Input
              type="text"
              placeholder="Address"
              name="address"
            />
            <Input
              type="mobile"
              placeholder="Mobile Number"
              name="phone"
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
          <Input
            type="password"
            placeholder="Repeat Password"
            name="repeatpassword"
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
