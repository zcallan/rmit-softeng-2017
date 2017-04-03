import './employeeList.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconCard } from 'views/generic';
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

    API.getEmployees().then(({ data }) => {
      this.props.receivedEmployees( data );
    }).catch(() => {
      this.props.fetchEmployeesFail();
    });
  }

  render() {
    const { fetching, list, error } = this.props.employees;

    return (
      <div className="employee-list">
        {( list ) ? (
          <div className="employee-list-group">
            {( list.length > 0 ) ? list.map( employee => (
              <Link to={`/employee/${employee.id}/details`} key={employee.id}>
                <div className="employee-list-item">
                  <div className="employee-list-item-details">
                    <h3>{employee.fullName}</h3>
                    <h4>{employee.email}</h4>
                  </div>
                  <div className="employee-list-item-action">
                    <p>edit</p>
                    <i className="material-icons">chevron_right</i>
                  </div>
                </div>
              </Link>
            )) : (
              <Row>
                <Col sm={6} smOffset={3}>
                  <IconCard icon="person_add">
                    <h3>No employees</h3>
                    <p>
                      There is currently no employees on record,
                      add one by clicking the link below
                    </p>
                  </IconCard>
                </Col>
              </Row>
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
        <Row>
          <Col sm={6} smOffset={3}>
            <Button href="/employee/create">Create Employee</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EmployeeList;
