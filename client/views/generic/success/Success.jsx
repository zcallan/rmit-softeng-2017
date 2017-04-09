import './success.scss';
import React, { Component, PropTypes } from 'react';

class Success extends Component {
  render() {
    return (
      <div className="success animated fadeIn">
        {this.props.children}
      </div>
    );
  }
}

Success.propTypes = {
  children: PropTypes.any,
};

export default Success;
