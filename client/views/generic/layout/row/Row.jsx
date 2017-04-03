import React, { PropTypes } from 'react';
import styles from './styles';


const Row = ({
  children,
  padding = true,
  left = false,
  right = false,
  center = false,
  spaceAround = false,
  spaceBetween = false,
  vAlign = false,
  ...restProps,
}) => {
  const styling = styles.Row;
  if ( padding ) styling['padding'] = styles.padding;
  if ( left ) styling['justifyContent'] = styles.left;
  if ( right ) styling['justifyContent'] = styles.right;
  if ( center ) styling['justifyContent'] = styles.center;
  if ( spaceAround ) styling['justifyContent'] = styles.spaceAround;
  if ( spaceBetween ) styling['justifyContent'] = styles.spaceBetween;
  if ( vAlign ) styling['alignItems'] = styles.center;

  return (
    <div style={styling} {...restProps}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.any,
};

export default Row;
