import React from 'react';
import styles from './index.module.scss';

const HardwareMenu = (props: any) => {
  return (
    <menu className={styles.container}>
      <button
        onClick={props.setHardware}
        className={styles.hardware}
        value='MacBookPro'
      >
        <i className='fas fa-laptop'></i>
      </button>
      <button
        onClick={props.setHardware}
        className={styles.hardware}
        value='iMac'
      >
        <i className='fas fa-desktop'></i>
      </button>
      <button
        onClick={props.setHardware}
        className={styles.hardware}
        value='iPhone'
      >
        <i className='fas fa-mobile-alt'></i>
      </button>
      <button
        onClick={props.setHardware}
        className={styles.hardware}
        value='iPhones'
      >
        <i className='fas fa-mobile-alt'></i>
      </button>
      <button
        onClick={props.setHardware}
        className={styles.hardware}
        value='iPadLandscape'
      >
        <i
          className='fas fa-tablet-alt'
          style={{ transform: 'rotate(90deg)' }}
        ></i>
      </button>
      <button
        onClick={props.setHardware}
        className={styles.hardware}
        value='iPadPortrait'
      >
        <i className='fas fa-tablet-alt'></i>
      </button>
    </menu>
  );
};

export default HardwareMenu;
