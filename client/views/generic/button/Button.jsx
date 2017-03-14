import './button.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';


class Button extends Component {
  static defaultProps = {
    className: '',
    column: false,
    selected: false,
    disabled: false,
    disabled: false,
  }

  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    column: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
  }

  render() {
    const { className, icon, children, href, text, submit, column, selected, disabled, loading, ...restProps} = this.props;
    const selectedCls = ( selected ) ? 'selected' : '';
    const columnCls = ( column ) ? 'button-column' : '';
    const disabledCls = ( disabled ) ? 'disabled' : '';
    const loadingCls = ( loading ) ? 'loading' : '';

    const btn = (
      <div {...restProps} className={`button ${columnCls} ${selectedCls} ${disabledCls} ${loadingCls} ${className}`}>
        <button type={submit ? 'submit' : 'button'} disabled={disabled || loading}>
          {icon && <i className="material-icons">{icon}</i>}
          {text || children}
        </button>
      </div>
    );

    /* If the button should link to a new page, wrap it in a Link. */
    return ( href )
      ? <Link to={href}>{btn}</Link>
      : btn;
  }
}

export default Button;
