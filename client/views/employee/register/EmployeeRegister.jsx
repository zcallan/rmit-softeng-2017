import './employeeRegister.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Input, InputGroup, Button, Form, Error } from 'views/generic';
import config from 'config/branding.json';
import API from 'utils/api/api.js';

class EmployeeRegister extends Component {
  state = {
    creating: false,
    created: false,
    error: null,
  }

  componentDidMount() {
    document.title = `Create employee | ${config.companyName}`;
    this.props.setPageTitle( 'Create an employee', 'You can create an employee on this page by entering their details below' );
  }

  handleSubmit = ( event, data ) => {
    // Do your register here
    console.log( data );
    this.setState({ creating: true });
    API.createEmployee( data).then(() => {
      this.setState({ created: true });
    }).catch(({ response })  => {
      this.setState({ error: response.data.error, creating: false });
    });

    // this.setState({ creating: true }, () => {
    //   setTimeout(() => {
    //     const createdData = {
    //       fullName: `${data.firstname} ${data.lastname}`,
    //       email: data.email,
    //     };
    //     this.props.receivedEmployee( createdData );
    //     this.setState({ created: true });
    //   }, 500 );
    // });
  }

  render() {
    const { created, creating, error } = this.state;

    if ( created ) {
      return <Redirect to="/employee/list" />;
    }

    return (
      <Container className="employee-register">
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
          <Input
            type="text"
            placeholder="Email"
            name="email"
            required
          />
          <Input
            type="text"
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
