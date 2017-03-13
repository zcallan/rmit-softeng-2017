import './text-input.scss';
import React, { Component, PropTypes } from 'react';


class TextInput extends Component {
  static defaultProps = {
    className: '',
    defaultValue: '',
    name: '',
  }

  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
  }

  render() {
    const { className, ...restProps } = this.props;

    return (
      <div className={`input text-input ${className}`}>
        <input
          {...restProps}
          type="text"
        />
      </div>
    );
  }
}

export default TextInput;
