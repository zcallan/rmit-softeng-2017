import './bookingsAdd.scss';
import React, { Component } from 'react';
import serialize from 'form-serialize';
import moment from 'moment';
import config from 'config/branding.json';
import { Row, Col } from 'flex-react';
import { Button, TimePair, Input } from 'views/generic';
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

  state = {

    time: {
      start: moment().startOf( 'day' ).valueOf(),
      end: moment().startOf( 'day' ).valueOf(),
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = serialize( this.form, { hash: true });
    API.createBooking( data ).then( success => {
      console.log( success );
    });
  }

  render() {
    const { customers, employees } = this.props;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
      <Row center>
        <Col sm={6}>
          <div className="bookings-add">
            <i className="material-icons">playlist_add</i>
            <h3>Add Booking</h3>

            <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
              <label htmlFor="customer">Customer</label>
              <select name="customer">
                {( customers.list && customers.list.length > 0 ) ? customers.list.map( customer => (
                    <option value={customer.email}>{customer.name.full}</option>
                  )) : ( customers.fetching ) ? (
                      <option>Loading...</option>
                    ) : (
                      <option>No customers found</option>
                    )}
              </select>

              <label htmlFor="employee">Employee</label>
              <select name="employee">
                {( employees.list && employees.list.length > 0 ) ? employees.list.map( customer => (
                    <option value={customer.email}>{customer.name.full}</option>
                  )) : ( employees.fetching ) ? (
                      <option>Loading...</option>
                    ) : (
                      <option>No employees found</option>
                    )}
              </select>

              <label htmlFor="dayOfWeek">Day</label>
              <select name="dayOfWeek">
                {days.map( d => <option key={d} value={d.toLowerCase()}>{d}</option>)}
              </select>

              <TimePair time={this.state.time}>
                {( start, end, onChange ) => (
                  <div>
                    <label htmlFor="start">Start Time</label>
                    <Input
                      type="time"
                      name="start"
                      required
                      onChange={value => onChange( 'start', value, updatedTime => this.setState({ time: updatedTime }))}
                      value={start}
                      step={30}
                      browserDefault
                    />

                    <label htmlFor="end">End Time</label>
                    <Input
                      type="time"
                      name="end"
                      required
                      onChange={value => onChange( 'end', value, updatedTime => this.setState({ time: updatedTime }))}
                      value={end}
                      step={30}
                      browserDefault
                    />
                  </div>
                )}
              </TimePair>
              <Button type="default" success text="Create Booking" icon="add" submit />
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default BookingsAdd;
