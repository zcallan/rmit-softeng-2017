import './employeeList.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'views/generic';


class EmployeeList extends Component {
  static propTypes = {
    requestEmployees: PropTypes.func,
    receivedEmployees: PropTypes.func,
    employees: PropTypes.object,
  }

  componentDidMount() {
    // this.props.requestEmployees();
  }

  render() {
    const { fetching, list, error } = this.props.employees;

    return (
      <Container className="employee-list">
        <h2>Employee List</h2>
        {( list ) ? (
          <div className="employee-list-group">
            {( list.length > 0 ) ? list.map( employee => (
              <div className="employee-list-item" key={employee.id}>
                <h3>{employee.fullName}</h3>
                <h4>{employee.email}</h4>
              </div>
            )) : (
              <h3 className="employee-list-empty">No employees on record.</h3>
            )}
          </div>
        ) : ( fetching ) ? (
          <div className="employee-list-fetching">
            <h3>Loading...</h3>
          </div>
        ) : ( error ) ? (
          <div className="employee-list-error">
            <h3>Uh oh! An error has occurred.</h3>
          </div>
        ) : (
          <div className="employee-list-else">
            <h3>Hmm, strange... something unusual happened here!</h3>
          </div>
        )}
        <Button href="/employee/create">Create Employee</Button>
      </Container>
    );
  }
}

export default EmployeeList;
