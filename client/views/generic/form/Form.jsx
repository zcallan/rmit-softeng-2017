import './form.scss';
import React, { Component, PropTypes } from 'react';
import serialize from 'form-serialize';


class Form extends Component {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }

  serializeForm() {
    return serialize( this.form, { hash: true });
  }

  handleSubmit = event => {
    event.preventDefault();

    if ( this.props.onSubmit ) {
      this.props.onSubmit( event, this.serializeForm());
    }
  }

  handleChange = event => {
    if ( this.props.onChange ) {
      this.props.onChange( event, this.serializeForm());
    }
  }

  render() {
    const { className, ...restProps } = this.props;

    return (
      <form
        {...restProps}
        className={`container ${className}`}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        ref={form => this.form = form}
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
