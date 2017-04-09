import './employeeDetails.scss';
import React, { Component, PropTypes } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, TimeSchedule, UserCard, Button, Error, Success } from 'views/generic';
import { Row, Col } from 'flex-react';
import config from 'config/branding.json';
import API from 'utils/api/api.js';
import EmployeeAvailability from '../availability';

class EmployeeDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    employees: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      deleted: false,
      error: false,
      success: false,
      availabilities: [],
    };
  }

  componentWillMount() {
    this._employeeId = this.props.match.params.id;
    this.fetchAvailabilities();
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

  fetchAvailabilities() {
    API.getEmployeeAvailabilities( this._employeeId ).then(({ data }) => {
      this.setState({ availabilities: data });
    });
  }

  handleSave = data => {
    this.setState({ error: null, success: false });
    API.addEmployeeAvailability( this._employeeId, data ).then(() => {
      this.setState({ success: 'Availability added' });
      this.fetchAvailabilities();
    }).catch( error  => {
      this.setState({ error: error.response.data.error });
    });
  }

  onClickDelete = () => {
    /* Delete the employee */
    API.deleteEmployee( this._employeeId ).then(() => {
      this.setState({ deleted: true });
    });
  }

  onClickDeleteAvailability = id => {
    /* Delete the availability */
    API.deleteEmployeeAvailability( this._employeeId, id ).then(() => {
      this.fetchAvailabilities();
    });
  }

  render() {
    const { deleted, error, success, availabilities } = this.state;
    const employee = this.getEmployee();

    if ( deleted ) {
      return <Redirect to="/employee/list" />;
    }

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
        <Row>
          <Col sm={4} smOffset={4}>
            <Link to={`/employee/${employee.email}/details`} key={employee._id}>
              <UserCard user={employee} />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            {( success ) && <Success>{success}</Success>}
            {( error ) && <Error>{error}</Error>}
            <div className="employee-details-schedule">
              <h3>Add item to schedule</h3>
              <TimeSchedule onSave={this.handleSave} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="employee-details-schedule">
              <h3>Current availabilites</h3>
              <EmployeeAvailability times={availabilities} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4} smOffset={4}>
            <Button onClick={this.onClickDelete} danger>Delete Employee</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeDetails;
