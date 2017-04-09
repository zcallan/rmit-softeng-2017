import './home.scss';
import React, { Component } from 'react';
import { Container, DashboardItem } from 'views/generic';
import { Row, Col } from 'flex-react';
import config from 'config/branding.json';

class Home extends Component {
  componentDidMount() {
    document.title = `Dashboard | ${config.companyName}`;
    this.props.setPageTitle( 'Dashboard', 'Welcome to the dashboard, on this page you can see a list of sections to access' );
  }

  getUser() {
    return this.props.user.data;
  }

  render() {
    return (
      <Container className="home">
        <Row>
          
        </Row>
        <Row>
          <Col sm={4}>
            <DashboardItem title="Bookings" icon="event" link="/bookings" />
          </Col>
          <Col sm={4}>
            <DashboardItem title="Employees" icon="group" link="/employee/list" />
          </Col>
          <Col sm={4}>
            <DashboardItem title="Customers" icon="group" link="/customers" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
