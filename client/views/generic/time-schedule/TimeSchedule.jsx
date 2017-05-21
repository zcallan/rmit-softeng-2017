import './timeSchedule.scss';
import React, { Component, PropTypes } from 'react';
import serialize from 'form-serialize';
import moment from 'moment';
import { Input, Button, TimePair } from 'views/generic';


class TimeSchedule extends Component {

  static defaultProps = {
    className: '',
  }

  static propTypes = {
    className: PropTypes.string,
  }

  state = {
    time: {
      start: moment().startOf( 'day' ).valueOf(),
      end: moment().startOf( 'day' ).valueOf(),
    },
  }

  handleSave = event => {
    event.preventDefault();
    let data = serialize( this.form, { hash: true });
    data.start = this.convertTimeToMinutes( data.start );
    data.end = this.convertTimeToMinutes( data.end );
    this.props.onSave && this.props.onSave( data );
  }

  convertTimeToMinutes( time ) {
    const ampm = time.split(' ')[1];
    const hhmm = time.split(' ')[0];
    const hh = parseInt(hhmm.split(':')[0]);
    const mm = parseInt(hhmm.split(':')[1]);
    let hours = 0;
    let minutes = 0;
    if ( ampm === 'am' && hh == 12 ) {
      hours = 0;
    }

    if ( ampm === 'am' && hh != 12 ) {
      hours = hh;
    }

    if ( ampm === 'pm' && hh == 12 ) {
      hours = 12;
    }

    if ( ampm === 'pm' && hh != 12 ) {
      hours = hh + 12;
    }

    minutes = mm;

    return ( hours * 60 ) + minutes;
  }

  render() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const { className, companies } = this.props;
    const { active, list } = companies;

    return (
      <div className={`time-schedule ${className}`}>
        <form onSubmit={this.handleSave} ref={form => this.form = form}>
          <p><b>Day</b></p>
          <select name="dayOfWeek">
            {days.map( d => <option key={d} value={d.toLowerCase()}>{d}</option>)}
          </select>
          <TimePair time={this.state.time}>
            {( start, end, onChange ) => (
              <div>
                <p><b>Start</b></p>
                <Input
                  type="time"
                  name="start"
                  required
                  onChange={value => onChange( 'start', value, updatedTime => this.setState({ time: updatedTime }))}
                  value={start}
                  step={30}
                  allowedTimes={[
                    {
                      start: active ? list[active].hours.start : 0,
                      end: active ? list[active].hours.end : 1440,
                    }
                  ]}
                />
                <p><b>End</b></p>
                <Input
                  type="time"
                  name="end"
                  required
                  onChange={value => onChange( 'end', value, updatedTime => this.setState({ time: updatedTime }))}
                  value={end}
                  step={30}
                  allowedTimes={[
                    {
                      start: active ? list[active].hours.start : 0,
                      end: active ? list[active].hours.end : 1440,
                    }
                  ]}
                />
              </div>
            )}
          </TimePair>
          <Button type="default" submit>Add</Button>
        </form>
      </div>
    );
  }
}

export default TimeSchedule;
