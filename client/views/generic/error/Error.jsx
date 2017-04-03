import './error.scss';
import React, { Component, PropTypes } from 'react';

class Error extends Component {
  render() {
    return (
      <div className="error animated fadeIn">
        {this.props.children}
      </div>
    );
  }
}

Error.propTypes = {
  children: PropTypes.any,
};

export default Error;
