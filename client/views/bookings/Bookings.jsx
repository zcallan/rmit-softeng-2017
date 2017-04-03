import './bookings.scss';
import React, { Component } from 'react';
import config from 'config/branding.json';

class Bookings extends Component {
  componentDidMount() {
    document.title = `Bookings | ${config.companyName}`;
    this.props.setPageTitle( 'Bookings', 'A list of bookings for your business can be viewed here' );
  }

  render() {
    return (
      <div />
    );
  }
}

export default Bookings;
