import './employeeList.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconCard, UserCard } from 'views/generic';
import { Row, Col } from 'flex-react';
import API from 'utils/api/api.js';
import config from 'config/branding.json';

class EmployeeList extends Component {
  static propTypes = {
    requestedEmployees: PropTypes.func,
    receivedEmployees: PropTypes.func,
    fetchEmployeesFail: PropTypes.func,
    employees: PropTypes.object,
  }

  componentDidMount() {
    document.title = `Employees | ${config.companyName}`;
    this.props.setPageTitle( 'Employees', 'A list of registered employees' );
    this.props.requestedEmployees();

    API.getEmployees()
      .then( this.props.receivedEmployees )
      .catch( this.props.fetchEmployeesFail );
  }

  render() {
    const { fetching, list, error } = this.props.employees;

    return (
      <div className="employee-list">
        {( list ) ? (
          <div className="employee-list-group">
            <Row center>
              {( list.length > 0 ) ? list.map( employee => (
                <Col sm={4} key={employee.email}>
                  <Link to={`/employee/${employee.email}/details`} key={employee._id}>
                    <UserCard user={employee} />
                  </Link>
                </Col>
              )) : (
                <Col sm={6} smOffset={3}>
                  <IconCard icon="person_add">
                    <h3>No employees</h3>
                    <p>
                      There are currently no employees on record,
                      add one by clicking the link below
                    </p>
                  </IconCard>
                </Col>
              )}
            </Row>
          </div>
        ) : ( fetching ) ? (
          <Row center>
            <Col sm={6}>
              <IconCard icon="cached">
                <h3>Loading employees</h3>
                <p>Please wait whilst employees load</p>
              </IconCard>
            </Col>
          </Row>
        ) : ( error ) ? (
          <Row center>
            <Col sm={6}>
              <IconCard icon="error_outline" error>
                <h3>Uh oh! An error has occurred.</h3>
                <p>Please refresh the page or try again later</p>
              </IconCard>
            </Col>
          </Row>
        ) : (
          <div className="employee-list-else">
            <IconCard icon="error_outline" error>
              <h3>Uh oh! An error has occurred.</h3>
              <p>Please refresh the page or try again later</p>
            </IconCard>
          </div>
        )}
        {
          list && (
            <Row center>
              <Col sm={6}>
                <Button href="/employee/create">Create Employee</Button>
                <Button typ="default" text="All Availabilities" href="/employee/availabilities" />
              </Col>
            </Row>
          )
        }
      </div>
    );
  }
}

export default EmployeeList;
