import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

function Card({ children, elevation, ...other }, ref) {
  return (
    <div
      ref={ref}
      className={clsx(styles.card, styles[elevation])}
      {...other}
    >
      {children}
    </div>
  );
}

function resolveElevation(elevation) {
  return 'elevation__'.replace('elevation__', elevation);
}

export default React.forwardRef(Card);
