import React from 'react';
import style from './index.module.scss';

const Device = (props: any): any => {
  const { device } = props;
  return (
    <figure className={style.container}>
      <div
        className={`${style['hardware']} ${style['hardware--' + device]}`}
      ></div>
    </figure>
  );
};

export default Device;
