import './input.scss';
import React, { PropTypes } from 'react';
import TextInput from './text';
import PasswordInput from './password';


const Input = ({ type, ...restProps }) => {
  switch ( type ) {
    case 'text':
      return <TextInput {...restProps} />;


    case 'password':
      return <PasswordInput {...restProps} />;

    default:
      return <input type="text" />;
  }
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
