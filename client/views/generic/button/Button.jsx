import './button.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';


class Button extends Component {
  static defaultProps = {
    className: '',
    column: false,
    selected: false,
  }

  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    column: PropTypes.bool,
    selected: PropTypes.bool,
  }

  render() {
    const { className, icon, children, href, text, submit, column, selected, ...restProps} = this.props;
    const selectedCls = selected ? 'selected' : '';
    const columnCls = column ? 'button-column' : '';

    const btn = (
      <div {...restProps} className={`button ${columnCls} ${selectedCls} ${className}`}>
        <button type={submit ? 'submit' : 'button'}>
          {icon && <i className="material-icons">{icon}</i>}
          {text || children}
        </button>
      </div>
    );

    return ( href )
      ? <Link to={href}>{btn}</Link>
      : btn;
  }
}

export default Button;
