import React, { Component, PropTypes } from 'react';
import styles from './styles';


const Grid = ({
  children,
  padding = true,
  ...restProps,
}) => {
  const styling = styles.Grid;
  if ( padding ) styling['padding'] = styles.padding;

  return (
    <div style={styling} {...restProps}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.any,
  padding: PropTypes.bool,
};

export default Grid;
