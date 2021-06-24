import React from 'react';
import style from './index.module.scss';

const PlatformList = (props: any): any => {
  const { items: platforms } = props;
  const items = [];
  for (const key in platforms) {
    if ({}.hasOwnProperty.call(platforms, key)) {
      const classes = [];
      classes.push(
        key !== 'web' ? 'fab fa-' + key.toLowerCase() : 'fas fa-code'
      );
      classes.push(
        platforms[key] ? style['platform--applicable'] : style['platform--NA']
      );
      items.push(
        <li className={style.platform} key={key}>
          <i
            className={classes.join(' ')}
            title={key[0].toUpperCase() + key.substring(1)}
          ></i>
        </li>
      );
    }
  }

  return (
    <ul className={style.container}>
      <label>Available for:</label>
      {items}
    </ul>
  );
};

export default PlatformList;
