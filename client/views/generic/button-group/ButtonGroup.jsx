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

    /* Persist an 'onClick' prop if there is one specified on the child component. */
    if ( child.props.onClick ) {
      child.props.onClick( event );
    }
  }

  render() {
    const { className, children, ...restProps } = this.props;
    const { selected } = this.state;

    /* We are cloning each child to index them and manage the selected state.
     * Each child is also given a 'selected' (bool) prop and an
     * 'onClick' (func) prop to help police control over the children. */
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
