import './mobile-input.scss';
import React, { Component, PropTypes } from 'react';
import MaskedInput from 'react-text-mask';


class MobileInput extends Component {
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
    const regex = [/0/, /[1-4]/, /[0-9]/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/];

    return (
      <div className={`input mobile-input ${className}`}>
        <MaskedInput
          {...restProps}
          mask={regex}
        />
      </div>
    );
  }
}

export default MobileInput;
