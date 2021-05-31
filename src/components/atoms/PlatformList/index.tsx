import React from 'react';
import styles from './index.module.scss';

const PlatformList = (props: any) => {
  const { items: platforms } = props;
  const items = [];
  for (const key in platforms) {
    if ({}.hasOwnProperty.call(platforms, key)) {
      const classes = [];
      classes.push(
        key !== 'web' ? 'fab fa-' + key.toLowerCase() : 'fas fa-code'
      );
      classes.push(
        platforms[key] ? styles['platform--applicable'] : styles['platform--NA']
      );
      items.push(
        <li className={styles.platform} key={key}>
          <i className={classes.join(' ')}></i>
        </li>
      );
    }
  }

  return <ul className={styles.container}>{items}</ul>;
};

export default PlatformList;
