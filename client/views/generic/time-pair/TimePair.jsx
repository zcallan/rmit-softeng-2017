import React, { Component, PropTypes } from 'react';


class TimePair extends Component {
  static defaultProps = {
    time: {
      start: 0,
      end: 0,
    },
  }

  static propTypes = {
    children: PropTypes.func.isRequired,
    time: PropTypes.object,
  }

  state = {
    start: this.props.time.start,
    end: this.props.time.end,
  }

  onChange = ( field, value, callback ) => {
    /* Create a mock state to mutate. */
    const updatedState = Object.assign({}, this.state );

    /* Update the single piece of state for start/end. */
    updatedState[field] = value;

    /* If invalid start time and valid end time, set start to end. */
    if ( updatedState.end && !updatedState.start ) {
      updatedState.start = updatedState.end;
    }
    /* If the start is valid and end is invalid, set end time to start time. */
    else if ( !updatedState.end && updatedState.start ) {
      updatedState.end = updatedState.start;
    }
    /* If we change the start and it is greater than the end time, fix accordingly. */
    else if (( field === 'start' ) && ( updatedState.start > updatedState.end )) {
      updatedState.end = updatedState.start;
    }
    /* If we change the end time and it preceeds the start time, fix accordingly. */
    else if (( field === 'end' ) && ( updatedState.start > updatedState.end )) {
      updatedState.start = updatedState.end;
    }

    this.setState({ ...updatedState }, () => callback( this.state ));
  }

  render() {
    const { children } = this.props;
    const { start, end } = this.state;

    return children( start, end, this.onChange );
  }
}

export default TimePair;
