import './employeeTimes.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconCard, UserCard } from 'views/generic';
import { Row, Col } from 'flex-react';
import API from 'utils/api/api.js';
import config from 'config/branding.json';
import EmployeeAvailability from '../availability';


class EmployeeList extends Component {
  static propTypes = {
    requestedEmployees: PropTypes.func,
    receivedEmployees: PropTypes.func,
    fetchEmployeesFail: PropTypes.func,
    employees: PropTypes.object,
  }

  state = {
    times: {},
  }

  componentDidMount() {
    document.title = `Employee Times | ${config.companyName}`;
    this.props.setPageTitle( 'Employee Times', 'A list of employee availabilities' );
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.props.requestedEmployees();

    API.getEmployees().then(({ data }) => {
      this.props.receivedEmployees( data );
    }).catch(() => {
      this.props.fetchEmployeesFail();
    });
  }

  fetchAvailabilities( email ) {
    API.getEmployeeAvailabilities( email ).then(({ data }) => {
      this.setState( state => ({
        times: {
          ...state.times,
          [email]: data,
        },
      }));
    });
  }

  handleDeleteTime = ( timeId, email ) => {
    if ( !this.state.times[email] ) return;

    this.setState( state => ({
      times: state.times[email].filter( time => time._id !== timeId ),
    }));
  }

  render() {
    const { fetching, list, error } = this.props.employees;
    const { times } = this.state;

    return (
      <div className="employee-times">
        {( list ) ? (
          <Row className="employee-times-group">
            {( list.length > 0 ) ? list.map( employee => (
              <Col sm={4} key={employee.email}>
                <Row>
                  <Col>
                    <Link to={`/employee/${employee.email}/details`} key={employee._id}>
                      <UserCard user={employee} />
                    </Link>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="employee-times-listing">
                      {( times[employee.email] && times[employee.email].length > 0 ) ? (
                        <EmployeeAvailability times={times[employee.email]} deleteTime={time => this.handleDeleteTime( time, employee.email )} />
                      ) : ( !!times[employee.email] ) ? (
                        <h3>No times to show.</h3>
                      ) : (
                        <Button type="default" success text="Load Times" onClick={() => this.fetchAvailabilities( employee.email )} />
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
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
          </Row>
        ) : ( fetching ) ? (
          <Row>
            <Col sm={6} smOffset={3}>
              <IconCard icon="cached">
                <h3>Loading employees</h3>
                <p>Please wait whilst employees load</p>
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
      </div>
    );
  }
}

export default EmployeeList;
