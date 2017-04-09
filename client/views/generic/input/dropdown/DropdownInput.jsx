import './dropdownInput.scss';
import React, { Component, PropTypes } from 'react';


class DropdownInput extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    children: PropTypes.on
  }

  state = {
    selected: 0,
    text: 'Select',
  }

  onSelect( text, index ) {
    this.setState({ selected: index, text });

    if ( this.props.onSelect )
      this.props.onSelect( text, index );
  }

  render() {
    const { children, ...restProps } = this.props;
    const { selected, text } = this.state;

    return (
      <div className="dropdown-input">
        <input {...restProps} type="text" value={text} />
        <div className="dropdown-container">
          {React.Children.map( children, ( child, i ) => React.cloneElement( child, {
            key: i,
            selected: i === selected,
            onSelect: text => this.onSelect( text, i )
          }))}
        </div>
      </div>
    );
  }
}

export default DropdownInput;
