import './time-input.scss';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


/* Convert minutes to milliseconds. */
const m2ms = minutes => minutes * 60 * 1000;

class TimeInput extends Component {
  static defaultProps = {
    className: '',
    name: '',
    date: new Date(),
    start: 0,
    end: 1440,
    step: 60,
    format: 'hh:mm a',
    browserDefault: false,
  }

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    format: PropTypes.string,
    date: PropTypes.string,
    start: PropTypes.number,
    end: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
    browserDefault: PropTypes.bool,
  }

  state = {
    showDropdown: false,
    selected: this.props.value || this.props.defaultValue,
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.value !== this.state.selected ) {
      console.log( 'time value updated', nextProps.value );
      this.setState({ selected: nextProps.value });
    }
  }

  getStartTime() {
    const { start } = this.props;

    /* 12:00am <= start <= 11:58pm */
    return ( start > 1438 ) ? 1438
      : ( start < 0 ) ? 0
      : start;
  }

  getEndTime() {
    const { end } = this.props;

    /* 12:01am <= end <= 11:59pm */
    return ( end > 1439 ) ? 1439
      : ( end < 1 ) ? 1
      : end;
  }

  getStep() {
    const { step } = this.props;

    /* 12 hours is the max step possible. */
    return ( step > 720 ) ? 720
      : ( step < 0 ) ? 0
      : step;
  }

  getTimes() {
    /* Convert minutes to milliseconds. */
    const start = m2ms( this.getStartTime());
    const end = m2ms( this.getEndTime());
    const step = m2ms( this.getStep());

    /* Get the start of today in EPOCH. */
    let midnight = this.props.date || new Date();
    midnight.setHours( 0, 0, 0, 0 );
    midnight = moment( midnight ).valueOf();

    /* Calculate the start and end EPOCH using the start of the day EPOCH. */
    const startTime = moment( midnight ).add( start, 'milliseconds' );
    const endTime = moment( midnight ).add( end, 'milliseconds' ).valueOf();

    const times = [];

    /* Build an array of the times by incrementing minutes (step) from the start to end EPOCH. */
    for ( let i = startTime.valueOf(); i < endTime; i += step ) {
      times.push( i );
    }

    return times;
  }

  handleFocus = () => {
    this.setState({ showDropdown: true }, () => {
      /* Find the active item in the dropdown. */
      const selectedNode = ReactDOM.findDOMNode( this.dropdown ).getElementsByClassName( 'active' );

      /* Scroll the dropdown into view of the active item. */
      if ( selectedNode && selectedNode.length > 0 ) {
        this.dropdown.scrollTop = selectedNode[0].offsetTop;
      }
    });
  }

  handleBlur = () => {
    /* Delay the dropdown hiding by 100ms to avoid the dropdown hiding too fast in the case of clicking on the dropdown. */
    setTimeout(() => this.setState({ showDropdown: false }), 100 );
  }

  handleChange = event => {
    if ( this.props.onChange )
      this.props.onChange( event.target.value );
  }

  selectTime( time ) {
    if ( this.props.onChange )
      this.props.onChange( time );
  }

  handleSelect = event => {
    const { value } = event.target;
    this.selectTime( parseInt( value, 10 ));
  }

  renderBrowserDefault() {
    const { format } = this.props;
    const { selected } = this.state;
    const times = this.getTimes();

    return (
      <select onChange={this.handleSelect} value={selected}>
        {times.map( time => (
          <option value={time}>{moment( time ).format( format )}</option>
        ))}
      </select>
    );
  }

  render() {
    const { className, format, browserDefault, ...restProps } = this.props;
    const { showDropdown, selected } = this.state;
    const times = this.getTimes();

    if ( browserDefault ) return this.renderBrowserDefault();

    const formattedValue = ( moment( selected ).isValid())
      ? moment( selected ).format( format )
      : '';

    return (
      <div
        className={`input time-input ${className}`}
        onBlur={this.handleBlur}
      >
        <input
          {...restProps}
          type="text"
          value={formattedValue}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
        />
        {( showDropdown ) && (
          <div className="time-input-dropdown"
          >
            <div className="time-input-dropdown-menu" ref={div => this.dropdown = div}>
              {times.map( time => (
                <p className={selected === time && 'active'} onMouseDown={() => this.selectTime( time )} key={time}>
                  {moment( time ).format( 'hh:mm a' )}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TimeInput;
