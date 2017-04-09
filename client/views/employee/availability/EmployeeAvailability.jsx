import './employeeAvailability.scss';
import React, { Component, PropTypes } from 'react';
import { Link, Redirect } from 'react-router-dom';
import pad from 'pad';
import { Container, TimeSchedule, UserCard, Button, Error, Success } from 'views/generic';
import { Row, Col } from 'flex-react';
import config from 'config/branding.json';
import API from 'utils/api/api.js';


class EmployeeDetails extends Component {
  static propTypes = {
    times: PropTypes.object.isRequired,
  }

  calculateTime( minutes ) {
    const hours = Math.floor( minutes / 60 );
    const mins = ( minutes % 60 );

    return `${pad( 2, `${hours}`, '0')}:${pad( 2, `${mins}`, '0' )}`;
  }

  render() {
    const { times } = this.props;

    if ( !times.length ) return <h4>No times saved.</h4>;

    return (
      <Row center className="employee-availability">
        {times.map( time => (
          <Col sm={6} lg={4} key={time._id}>
            <div className="employee-availability-time">
              <h4>{time.dayOfWeek}</h4>
              <p>{this.calculateTime(time.start)} - {this.calculateTime(time.end)}</p>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}

export default EmployeeDetails;
