import './bookingsAdd.scss';
import React, { Component } from 'react';
import config from 'config/branding.json';
import { Row, Col } from 'flex-react';
import {  } from 'views/generic';
import API from 'utils/api/api';

class BookingsAdd extends Component {
  componentDidMount() {
    document.title = `Add Booking | ${config.companyName}`;
    this.props.setPageTitle( 'Add Booking', 'You can add a customer booking on this page' );

    API.getCustomers().then(({ data }) => {
      this.props.receivedCustomers( data );
    }).catch(() => {
      this.props.fetchCustomersFail();
    });

    API.getEmployees().then(({ data }) => {
      this.props.receivedEmployees( data );
    }).catch(() => {
      this.props.fetchEmployeesFail();
    });
  }

  render() {
    const { customers, employees } = this.props;

    return (
      <Row center>
        <Col sm={6}>
          <div className="booking-add">
            <i className="material-icons">playlist_add</i>
            <h3>Add Booking</h3>

            <label>Customer</label>
            <select>
              {( customers.list && customers.list.length > 0 ) ? customers.list.map( customer => (
                <option>{customer.name.full}</option>
              )) : ( customers.fetching ) ? (
                <option>Loading...</option>
              ) : (
                <option>No customers found</option>
              )}
            </select>

            <label>Employee</label>
            <select>
              {( employees.list && employees.list.length > 0 ) ? employees.list.map( customer => (
                  <option>{customer.name.full}</option>
                )) : ( employees.fetching ) ? (
                    <option>Loading...</option>
                  ) : (
                    <option>No customers found</option>
                  )}
            </select>
          </div>
        </Col>
      </Row>
    );
  }
}

export default BookingsAdd;
