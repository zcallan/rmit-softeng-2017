import './customerBooking.scss';
import React, { Component } from 'react';
import serialize from 'form-serialize';
import moment from 'moment';
import config from 'config/branding.json';
import { Row, Col } from 'flex-react';
import { Button, TimePair, Input, Error, Success } from 'views/generic';
import API from 'utils/api/api';


class CustomerBooking extends Component {
  componentDidMount() {
    document.title = `Add Booking | ${config.companyName}`;
    this.props.setPageTitle( 'Add Booking', 'You can add a customer booking on this page' );
    this.props.requestedEmployees();
    this.props.requestActivities();

    API.getEmployees()
      .then( this.props.receivedEmployees )
      .catch( this.props.fetchEmployeesFail );

    API.getActivities()
      .then( this.props.receiveActivities )
      .catch( this.props.fetchActivitiesFail );
  }

  state = {
    error: null,
    success: null,
    availabilities: {
      data: [],
      loading: false,
      error: null,
    },
    selectedDay: null,
    selectedActivity: null,
    time: {
      start: moment().startOf( 'day' ).valueOf(),
      end: moment().startOf( 'day' ).valueOf(),
    },
    activities: {
      list: [
        {
          name: 'Haircut',
          duration: 30,
        },
        {
          name: 'Handjob',
          duration: 2,
        }
      ],
      loading: false,
      error: null,
    },
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = serialize( this.form, { hash: true });
    data.customer = this.props.user.data.email;
    data.activity = this.state.selectedActivity;
    this.setState({ success: null, error: null });
    API.createBooking( data ).then(() => {
      this.setState({ success: 'Booking successfully created' });
    }).catch( error => {
      this.setState({ error: error.response.data.error });
    });
  }

  handleTimeUpdate = time => {
    this.setState({ time });
  }

  handleSelectEmployee = event => {
    const { value } = event.target;

    this.setState( state => ({
      selectedDay: null,
      time: {
        start: moment().startOf( 'day' ).valueOf(),
        end: moment().startOf( 'day' ).valueOf(),
      },
      availabilities: {
        ...state.availabilities,
        loading: true,
        error: null,
      }
    }));

    API.getEmployeeAvailabilities( value )
      .then( success => this.setState({
        selectedDay: success.data.length > 0 && success.data[0].dayOfWeek,
        availabilities: {
          loading: false,
          error: null,
          data: success.data,
        }
      }))
      .catch( error => this.setState({
        availabilities: {
          loading: false,
          data: [],
          error,
        }
      }));
  }

  handleSelectDay = event => {
    const { value } = event.target;

    this.setState({ selectedDay: value });
  }

  handleSelectActivity = event => {
    const { value } = event.target;
    this.setState({ selectedActivity: JSON.parse(value) });
  }

  renderHours() {
    const { time, selectedDay } = this.state;
    const { data } = this.state.availabilities;

    /* Get an array of the available times the employee has on the selected day. */
    const allowedTimes = [... new Set( data
      .filter( time => time.dayOfWeek === selectedDay )
      .map( time => ({
        start: time.start - 1,
        end: time.end + 1,
      }))
    )];

    return (
      <TimePair time={time}>
        {( start, end, onChange ) => (
          <div>
            <label htmlFor="start">Start Time</label>
            <Input
              type="time"
              name="start"
              required
              onChange={value => onChange( 'start', value, this.handleTimeUpdate )}
              value={start}
              step={30}
              browserDefault
              allowedTimes={allowedTimes}
            />

            <label htmlFor="end">End Time</label>
            <Input
              type="time"
              name="end"
              required
              onChange={value => onChange( 'end', value, this.handleTimeUpdate )}
              value={end}
              step={30}
              browserDefault
              allowedTimes={allowedTimes}
            />
          </div>
        )}
      </TimePair>
    );
  }

  renderDays() {
    const { data } = this.state.availabilities;
    const days = [...new Set( data.map( time => time.dayOfWeek ))];

    return (
      <div>
        <label htmlFor="dayOfWeek">Day</label>
        <select name="dayOfWeek" onChange={this.handleSelectDay} value={this.state.selectedDay}>
          <option disabled>Choose a day</option>
          {days.map( d => <option key={d} value={d.toLowerCase()}>{d}</option>)}
        </select>
      </div>
    );
  }

  render() {
    const { employees, activities } = this.props;
    const { availabilities, selectedActivity } = this.state;

    return (
      <Row center>
        <Col sm={6}>
          {this.state.error && <Error>{this.state.error}</Error>}
          {this.state.success && <Success>{this.state.success}</Success>}
          <div className="bookings-add">
            <i className="material-icons">playlist_add</i>
            <h3>Add Booking</h3>

            <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
              <label htmlFor="activity">Booking for</label>
              <select name="activity" onChange={this.handleSelectActivity}>
                {( activities.list && activities.list.length > 0 ) ? [
                  <option disabled selected>Choose an activity</option>,
                  activities.list.map( activity => <option value={JSON.stringify(activity)}>{activity.name}</option> )
                ] : ( activities.loading ) ? (
                  <option disabled selected>Loading...</option>
                ) : (
                  <option disabled selected>No activities found</option>
                )}
              </select>

              {( selectedActivity ) && (
                <div>
                  <label htmlFor="employee">Employee</label>
                  <select name="employee" onChange={this.handleSelectEmployee}>
                    {( employees.list && employees.list.length > 0 ) ? [
                      <option disabled selected>Choose an employee</option>,
                      employees.list.map( customer => <option value={customer.email}>{customer.name.full}</option>
                    )] : ( employees.fetching ) ? (
                      <option disabled selected>Loading...</option>
                    ) : (
                      <option disabled selected>No employees found</option>
                    )}
                  </select>

                  {( availabilities.loading ) && <p>Loading...</p>}

                  {( availabilities.data.length > 0 ) && [
                    this.renderDays(),
                    this.renderHours(),
                  ]}
                </div>
              )}
              <Button type="default" success text="Create Booking" icon="add" submit />
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default CustomerBooking;
