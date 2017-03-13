import './container.scss';
import React, { Component, PropTypes } from 'react';


class Container extends Component {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  }

  render() {
    return (
      <div className={`container ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
