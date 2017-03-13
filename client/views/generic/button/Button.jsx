import './button.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';


class Button extends Component {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  render() {
    const btn = (
      <div className={`button ${this.props.className}`}>
        <button>{this.props.children}</button>
      </div>
    );

    return this.props.href
      ? <Link to={this.props.href}>{btn}</Link>
      : btn;
  }
}

export default Button;
