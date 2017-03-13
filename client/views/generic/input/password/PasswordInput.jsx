import './password-input.scss';
import React, { Component, PropTypes } from 'react';


class PasswordInput extends Component {
  static defaultProps = {
    className: '',
    defaultValue: '',
  }

  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const { className, ...restProps } = this.props;

    return (
      <div className={`input password-input ${className}`}>
        <input
          {...restProps}
          type="password"
        />
      </div>
    );
  }
}

export default PasswordInput;
