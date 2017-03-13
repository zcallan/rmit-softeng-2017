import './buttonGroup.scss';
import React, { Component, PropTypes } from 'react';


class ButtonGroup extends Component {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  state = {
    selected: 0,
  }

  handleClick = ( event, child, index ) => {
    this.setState({ selected: index });

    if ( child.props.onClick ) {
      child.props.onClick( event );
    }
  }

  render() {
    const { className, children, ...restProps } = this.props;
    const { selected } = this.state;

    return (
      <div {...restProps } className={`button-group ${className}`}>
        {React.Children.map( children, ( child, index ) => React.cloneElement( child, {
          selected: selected === index,
          onClick: event => this.handleClick( event, child, index ),
        }))}
      </div>
    );
  }
}

export default ButtonGroup;
