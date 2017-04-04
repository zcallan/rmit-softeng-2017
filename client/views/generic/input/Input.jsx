import './input.scss';
import React, { PropTypes } from 'react';
import TextInput from './text';
import PasswordInput from './password';
import TimeInput from './time';
import DropdownInput, { DropdownInputItem } from './dropdown';


const Input = ({ type, ...restProps }) => {
  switch ( type ) {
    case 'text':
      return <TextInput {...restProps} />;

    case 'password':
      return <PasswordInput {...restProps} />;

    case 'time':
      return <TimeInput {...restProps} />;

    case 'dropdown':
      return <DropdownInput {...restProps} />;

    case 'dropdown-item':
    case 'dropdown item':
    case 'dropdownItem':
      return <DropdownInputItem {...restProps} />;

    default:
      return <input type="text" />;
  }
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
