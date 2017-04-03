import './employeeDetails.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Container, TimeSchedule } from 'views/generic';
import config from 'config/branding.json';
import API from 'utils/api/api.js';

class EmployeeDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    employees: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this._employeeId = this.props.match.params.id;
  }

  componentDidMount() {
    document.title = `Employee details | ${config.companyName}`;
    this.props.setPageTitle( 'Employee details', 'Displays a particular employees personal details' );

    if ( !this.getEmployee() ) {
      /* Can't find the employee, let's fetch the employee */
      API.getEmployee(this._employeeId).then(({ data }) => {
        this.props.receivedEmployees([ data ]);
      }).catch(() => {
        this.props.fetchEmployeesFail();
      });
    }
  }

  getEmployee() {
    const { employees } = this.props;
    if ( !employees.list ) { return null; }
    return employees.list.find( employee => employee.email === this._employeeId );
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
        <h3>{employee.name.full}</h3>
        <h4>{employee.email}</h4>

        <div className="employee-details-schedule">
          {/* <TimeSchedule monday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule tuesday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule wednesday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule thursday schedule={employee.schedule} onSave={this.handleSave} />
          <TimeSchedule friday schedule={employee.schedule} onSave={this.handleSave} /> */}
        </div>
      </Container>
    );
  }
}

export default EmployeeDetails;
