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

    const data = serialize( this.form, { hash: true });
    console.log( data );

  }

  render() {
    const { className } = this.props;

    return (
      <div className={`time-schedule ${className}`}>
        <form onSubmit={this.handleSave} ref={form => this.form = form}>
          <label>Day</label>
          <Input
            type="dropdown"
            name="day"
            onSelect={this.handleSelect}
          >
            <Input type="dropdown-item">Monday</Input>
            <Input type="dropdown-item">Tuesday</Input>
            <Input type="dropdown-item">Wednesday</Input>
            <Input type="dropdown-item">Thursday</Input>
            <Input type="dropdown-item">Friday</Input>
            <Input type="dropdown-item">Saturday</Input>
            <Input type="dropdown-item">Sunday</Input>
          </Input>
          <TimePair time={this.state.time}>
            {( start, end, onChange ) => (
              <div>
                <label>Start</label>
                <Input
                  type="time"
                  name="start"
                  required
                  onChange={value => onChange( 'start', value, updatedTime => this.setState({ time: updatedTime }))}
                  value={start}
                  step={30}
                />
                <label>End</label>
                <Input
                  type="time"
                  name="end"
                  required
                  onChange={value => onChange( 'end', value, updatedTime => this.setState({ time: updatedTime }))}
                  value={end}
                  step={30}
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
