import './employeeRegister.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, InputGroup, Button, Form } from 'views/generic';
import config from 'config/branding.json';

class EmployeeRegister extends Component {
  state = {
    creating: false,
    created: false,
    error: null,
  }

  componentDidMount() {
    document.title = `Create employee | ${config.companyName}`;
  }

  handleSubmit = ( event, data ) => {
    // Do your register here
    console.log( data );

    this.setState({ creating: true }, () => {
      setTimeout(() => {
        const createdData = {
          fullName: `${data.firstname} ${data.lastname}`,
          email: data.email,
        };
        this.props.receivedEmployee( createdData );
        this.setState({ created: true });
      }, 500 );
    });
  }

  render() {
    const { created, creating } = this.state;

    if ( created ) {
      return <Redirect to="/employee/list" />;
    }

    return (
      <Container className="employee-register">
        <h2>Create Employee</h2>
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
          <Button type="default" submit disabled={creating}>{creating ? 'Creating...' : 'Create'}</Button>
        </Form>
      </Container>
    );
  }
}

export default EmployeeRegister;
