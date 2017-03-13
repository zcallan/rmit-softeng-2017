import './home.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'views/generic';


class Home extends Component {
  render() {
    return (
      <Container className="home">
        <h2>Appointment Bookings</h2>
      </Container>
    );
  }
}

export default Home;
