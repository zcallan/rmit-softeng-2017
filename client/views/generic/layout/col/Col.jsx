import React, { PropTypes } from 'react';
import styles from './styles';


const Col = ({
  children,
  padding = true,
  xs = 12,
  sm = xs,
  md = sm,
  lg = md,
  ...restProps,
}) => {
  const size = 6;
  const styling = styles.Col( size );
  if ( padding ) styling['padding'] = styles.padding;

  return (
    <div style={styling} {...restProps}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.any,
};

export default Col;
