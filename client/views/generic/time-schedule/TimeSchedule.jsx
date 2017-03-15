import './timeSchedule.scss';
import 'rc-time-picker/assets/index.css';
import React, { Component, PropTypes } from 'react';
import TimePicker from 'rc-time-picker';


class TimeSchedule extends Component {
  state = {
    start: this.props.schedule[this.getDay()].start,
    end: this.props.schedule[this.getDay()].end,
  }

  static defaultProps = {
    className: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  }

  static propTypes = {
    className: PropTypes.string,
    onSave: PropTypes.func,
    schedule: PropTypes.object,
    monday: PropTypes.bool,
    tuesday: PropTypes.bool,
    wednesday: PropTypes.bool,
    thursday: PropTypes.bool,
    friday: PropTypes.bool,
    saturday: PropTypes.bool,
    sunday: PropTypes.bool,
  }

  getDay() {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = this.props;
    return ( monday ) ? 'monday'
      : ( tuesday ) ? 'tuesday'
      : ( wednesday ) ? 'wednesday'
      : ( thursday ) ? 'thursday'
      : ( friday ) ? 'friday'
      : ( saturday ) ? 'saturday'
      : ( sunday ) ? 'sunday'
      : 'invalid';
  }

  handleStartChange = value => {
    this.setState({ start: value });
  }

  handleEndChange = value => {
    this.setState({ end: value });
  }

  handleSave = () => {
    const { start, end } = this.state;
    this.props.onSave({ start, end }, this.getDay());
  }

  handleRefresh = () => {
    const { schedule } = this.props;

    this.setState({
      start: schedule[this.getDay()].start,
      end: schedule[this.getDay()].end,
    });
  }

  render() {
    const { className } = this.props;
    const { start, end } = this.state;

    return (
      <div className={`time-schedule ${className}`}>
        <h3>{this.getDay()}</h3>
        <div className="time-schedule-start">
          <label>Start</label>
          <TimePicker
            onChange={this.handleStartChange}
            value={start}
            showSecond={false}
            use12Hours
            format="h:mm a"
          />
        </div>
        <div className="time-schedule-end">
          <label>End</label>
          <TimePicker
            onChange={this.handleEndChange}
            value={end}
            showSecond={false}
            use12Hours
            format="h:mm a"
          />
        </div>
        <div className="time-schedule-actions">
          <div className="time-schedule-refresh" onClick={this.handleRefresh}>
            <i className="material-icons">refresh</i>
          </div>
          <div className="time-schedule-save" onClick={this.handleSave}>
            <i className="material-icons">check</i>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSchedule;
