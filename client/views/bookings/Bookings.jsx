import './bookings.scss';
import React, { Component } from 'react';
import config from 'config/branding.json';
import { Row, Col } from 'flex-react';
import { IconCard } from 'views/generic';

class Bookings extends Component {
  componentDidMount() {
    document.title = `Bookings | ${config.companyName}`;
    this.props.setPageTitle( 'Bookings', 'A list of bookings for your business can be viewed here' );
  }

  render() {
    return (
      <Row>
        <Col sm={6} smOffset={3}>
          <IconCard icon="event_busy">
            <h3>No bookings</h3>
            <p>
              There is currently no bookings on record
            </p>
          </IconCard>
        </Col>
      </Row>
    );
  }
}

export default Bookings;
