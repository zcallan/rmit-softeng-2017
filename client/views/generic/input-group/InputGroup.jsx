import './input-group.scss';
import React, { Component, PropTypes } from 'react';


class InputGroup extends Component {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={`input-group ${className}`}>
        {children}
      </div>
    );
  }
}

export default InputGroup;
