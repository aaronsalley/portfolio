import React from 'react';
// import { connect } from 'react-redux';
import styles from './index.module.scss';

const Device = (props: any): any => {
  const { device } = props;
  return (
    <figure className={styles.container}>
      <div
        className={`${styles['hardware']} ${styles['hardware--' + device]}`}
      ></div>
    </figure>
  );
};

export default Device;
