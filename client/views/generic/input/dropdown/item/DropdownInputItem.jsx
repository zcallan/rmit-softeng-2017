import './dropdownInputItem.scss';
import React, { Component, PropTypes } from 'react';


class DropdownInputItem extends Component {
  defaultProps = {
    selected: false,
  }

  static propTypes = {
    selected: PropTypes.bool,
    children: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  handleMouseDown = () => {
    if ( this.props.onSelect )
      this.props.onSelect( this.props.children );
  }

  render() {
    const { children, selected } = this.props;
    const selectedClass = ( selected ) ? 'selected' : '';

    return (
      <div className={`dropdown-input-item ${selectedClass}`} onMouseDown={this.handleMouseDown}>
        {children}
      </div>
    );
  }
}

export default DropdownInputItem;
