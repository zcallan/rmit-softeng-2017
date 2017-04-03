import './employeeDetails.scss';
import React, { Component, PropTypes } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, TimeSchedule, UserCard, Button } from 'views/generic';
import { Row, Col } from 'flex-react';
import config from 'config/branding.json';
import API from 'utils/api/api.js';
import moment from 'moment';

const mockSchedule = {
  monday: {
    start: moment(),
    end: moment(),
  },
  tuesday: {
    start: moment(),
    end: moment(),
  },
  wednesday: {
    start: moment(),
    end: moment(),
  },
  thursday: {
    start: moment(),
    end: moment(),
  },
  friday: {
    start: moment(),
    end: moment(),
  },
};

class EmployeeDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    employees: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      deleted: false,
    };
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

  onClickDelete = () => {
    /* Delete the employee */
    API.deleteEmployee( this._employeeId ).then(() => {
      this.setState({ deleted: true });
    });
  }

  render() {
    const { deleted } = this.state;
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
            <div className="employee-details-schedule">
              <TimeSchedule monday schedule={mockSchedule} onSave={this.handleSave} />
              <TimeSchedule tuesday schedule={mockSchedule} onSave={this.handleSave} />
              <TimeSchedule wednesday schedule={mockSchedule} onSave={this.handleSave} />
              <TimeSchedule thursday schedule={mockSchedule} onSave={this.handleSave} />
              <TimeSchedule friday schedule={mockSchedule} onSave={this.handleSave} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4} smOffset={4}>
            <Button onClick={this.onClickDelete} danger>Delete</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeDetails;
