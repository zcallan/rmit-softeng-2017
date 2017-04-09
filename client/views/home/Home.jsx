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

  renderAdmin() {
    return (
      <Row>
        <Col sm={4}>
          <DashboardItem title="Bookings" icon="event" link="/bookings" />
        </Col>
        <Col sm={4}>
          <DashboardItem title="Employees" icon="group" link="/employee/list" />
        </Col>
        <Col sm={4}>
          <DashboardItem title="Customers" icon="group" link="/customer/list" />
        </Col>
      </Row>
    );
  }

  renderEmployee() {
    return (
      <Row>
        <Col sm={12}>
          Unfortunately there is currently no actions you are able to perform.
        </Col>
      </Row>
    );
  }

  renderCustomer() {
    return (
      <Row>
        <Col sm={4}>
          <DashboardItem title="View available dates & time" icon="event" link="/employee/availabilities" />
        </Col>
      </Row>
    );
  }

  render() {
    const { type } = this.getUser();
    return (
      <Container className="home">
        <Row>
          <Col sm={12} className="text-left">
            <h1>Welcome {this.getUser().name.first}</h1>
          </Col>
        </Row>
        {
          type === 'admin' && this.renderAdmin()
        }
        {
          type === 'employee' && this.renderEmployee()
        }
        {
          type === 'customer' && this.renderCustomer()
        }
      </Container>
    );
  }
}

export default Home;
