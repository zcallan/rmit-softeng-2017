import './home.scss';
import React, { Component } from 'react';
import { Container } from 'views/generic';
import { Grid, Row, Col } from 'flex-react';


class Home extends Component {
  render() {
    return (
      <Container className="home">
        <Grid>
          <Row>
            <Col sm={4}>
              Bookings
            </Col>
            <Col sm={4}>
              Employees
            </Col>
            <Col sm={4}>
              Customers
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
