import './employeeDetails.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'views/generic';


class EmployeeDetails extends Component {
  render() {
    return (
      <Container className="employee-details">
        <h2>Employee Details</h2>
      </Container>
    );
  }
}

export default EmployeeDetails;
