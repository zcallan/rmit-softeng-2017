import './bookings.scss';
import React, { Component } from 'react';
import config from 'config/branding.json';
import { Row, Col } from 'flex-react';
import moment from 'moment';
import { IconCard, Button } from 'views/generic';
import API from 'utils/api/api';

class Bookings extends Component {
  state = {
    fetching: true,
    error: null,
    bookings: null,
  }

  componentDidMount() {
    document.title = `Bookings | ${config.companyName}`;
    this.props.setPageTitle( 'Bookings', 'A list of bookings for your business can be viewed here' );

    API.requestBookings()
      .then( success => this.handleSuccess( success ))
      .catch( error => this.handleError( error ));
  }

  handleSuccess( success ) {
    console.log( success );
    this.setState({
      bookings: success.data,
      fetching: false,
    });
  }

  handleError( error ) {
    console.log( error );
    this.setState({
      error,
      fetching: false,
    });
  }

  renderBookings() {
    const { bookings } = this.state;
    let counter = 1;

    return (
      <Row className="bookings-list">
        <Col>
          <Row center>
            {bookings.map( booking => (
              <Col sm={6} key={booking.id}>
                <div className="bookings-tile">
                  <h3>Booking #{counter++}</h3>
                  <h4>Created at</h4>
                  <p>{moment( booking.createdAt ).format( 'hh:mm a, dddd DD MMMM YY' )}</p>

                  <h4>Created by</h4>
                  <p>{booking.madeBy}</p>

                  <h4>Employee</h4>
                  <p>{booking.employee}</p>

                  <h4>Start Time</h4>
                  <p>{moment( booking.startDate ).format( 'hh:mm a, dddd DD MMMM YY' )}</p>

                  <h4>End Time</h4>
                  <p>{moment( booking.endDate).format( 'hh:mm a, dddd DD MMMM YY' )}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row center>
            <Col sm={6}>
              <Button type="default" href="/bookings/add" text="Add Booking" icon="add" />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  render() {
    const { fetching, error, bookings } = this.state;

    if ( fetching ) return <h3>Loading..</h3>;
    if ( error ) return (
      <Error>
        <p>Failed to fetch bookings</p>
      </Error>
    );

    return ( bookings && bookings.length > 0 )
      ? this.renderBookings()
      : (
        <Row>
          <Col sm={6} smOffset={3}>
            <IconCard icon="event_busy">
              <h3>No bookings</h3>
              <p>There is currently no bookings on record</p>
              <Button type="default" href="/bookings/add" text="Add Booking" icon="add" />
            </IconCard>
          </Col>
        </Row>
      );
  }
}

export default Bookings;
