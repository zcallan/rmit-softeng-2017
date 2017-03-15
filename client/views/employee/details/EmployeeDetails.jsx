import './employeeDetails.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, TimeSchedule } from 'views/generic';


class EmployeeDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    employees: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this._employeeId = parseInt( this.props.match.params.id, 10 );
  }

  componentDidMount() {
    if ( !this.getEmployee() ) {
      this.props.requestEmployee( this._employeeId );
    }
  }

  getEmployee() {
    const { employees } = this.props;

    return employees.list.find( employee => employee.id === this._employeeId );
  }

  handleSave = ( schedule, day ) => {
    this.props.updateEmployeeSchedule( this._employeeId, schedule, day );
  }

  render() {
    const employee = this.getEmployee();

    if ( !employee ) {
      return (
        <div className="employee-details-empty">
          <h3>Employee does not exist.</h3>
          <Link to="/employee/list">Return to Employee List</Link>
        </div>
      );
    }

    return (
      <Container className="employee-details">
        <h2>Employee Details</h2>
        <h3>{employee.fullName}</h3>
        <h4>{employee.email}</h4>

        <div className="employee-details-schedule">
          <TimeSchedule monday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule tuesday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule wednesday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule thursday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule friday schedule={employee.schedule} onSave={this.handleSave} />
        </div>
      </Container>
    );
  }
}

export default EmployeeDetails;
