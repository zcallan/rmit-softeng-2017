import './iconCard.scss';
import React, { Component, PropTypes } from 'react';

class IconCard extends Component {
  render() {
    const errorClass = ( this.props.error ) ? 'error' : '';
    return (
      <div className={`icon-card ${errorClass}`}>
        <i className="material-icons">{this.props.icon}</i>
        {this.props.children}
      </div>
    );
  }
}

IconCard.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.any,
};

export default IconCard;
