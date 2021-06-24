import React from 'react';
import HardwareMenu from '../../atoms/HardwareMenu';
import style from './index.module.scss';

const Device = (props: any): any => {
  const { device, setHardware, hardware } = props;

  return (
    <figure className={style.container}>
      <div
        className={`${style['hardware']} ${style['hardware--' + device]}`}
      ></div>
      <HardwareMenu setHardware={setHardware} hardware={hardware} />
    </figure>
  );
};

export default Device;
