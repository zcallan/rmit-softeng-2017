import './home.scss';
import React, { Component } from 'react';
import { Container } from 'views/generic';
import { Grid, Row, Col } from 'flex-react';
import config from 'config/branding.json';

class Home extends Component {
  componentDidMount() {
    document.title = `Dashboard | ${config.companyName}`;
    this.props.setPageTitle( 'Dashboard', 'Welcome to the dashboard, on this page you can see a list of sections to access' );
  }

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
