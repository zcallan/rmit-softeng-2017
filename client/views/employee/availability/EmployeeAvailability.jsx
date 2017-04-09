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
    deleteTime: PropTypes.object.isRequired,
  }

  state = {
    deleting: false,
    deleted: false,
    error: null,
  }

  calculateTime( minutes ) {
    const hours = Math.floor( minutes / 60 );
    const mins = ( minutes % 60 );

    return `${pad( 2, `${hours}`, '0')}:${pad( 2, `${mins}`, '0' )}`;
  }

  deleteTime( timeId ) {
    this.setState({
      deleting: true,
      deleted: false,
    });

    API.deleteEmployeeAvailability( this.props.employeeId, timeId )
      .then(() => {
        this.props.deleteTime( timeId );
        this.setState({
          deleting: false,
          deleted: true,
          error: null,
        });
      })
      .catch( error => this.setState({
        deleting: false,
        error,
      }));
  }

  render() {
    const { times } = this.props;
    const { deleting, deleted, error } = this.state;

    if ( !times.length ) return <h4>No times saved.</h4>;

    return (
      <Row center className="employee-availability">
        {( deleting ) && (
          <Error>
            <p>Deleting...</p>
          </Error>
        )}
        {( deleting ) && (
          <Success>
            <p>Deleted!</p>
          </Success>
        )}
        {( error ) && (
          <Error>
            <p>Failed to delete time.</p>
          </Error>
        )}
        {times.map( time => (
          <Col key={time._id}>
            <div className="employee-availability-time">
              <h4>{time.dayOfWeek}</h4>
              <p>{this.calculateTime(time.start)} - {this.calculateTime(time.end)}</p>
              <Button type="default" danger text="Delete Time" onClick={() => this.deleteTime( time._id )} />
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}

export default EmployeeDetails;
