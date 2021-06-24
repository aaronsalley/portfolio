import React from 'react';
import style from './index.module.scss';

const HardwareMenu = (props: any): any => {
  const buttons = [];
  for (const key in props.hardware) {
    if ({}.hasOwnProperty.call(props.hardware, key)) {
      let icon;
      let title;
      switch (key.replace('--', '')) {
        case 'MacBookPro':
          icon = <i className='fas fa-laptop'></i>;
          title = 'Laptop';
          break;
        case 'iMac':
          icon = <i className='fas fa-desktop'></i>;
          title = 'Desktop';
          break;
        case 'iPhone':
          icon = <i className='fas fa-mobile-alt'></i>;
          title = 'Mobile';
          break;
        case 'iPhones':
          icon = <i className='fas fa-mobile-alt'></i>;
          title = 'Mobile (multiple)';
          break;
        case 'iPadLandscape':
          icon = (
            <i
              className='fas fa-tablet-alt'
              style={{ transform: 'rotate(90deg)' }}
            ></i>
          );
          title = 'Tablet (landscape)';
          break;
        case 'iPadPortrait':
          icon = <i className='fas fa-tablet-alt'></i>;
          title = 'Tablet (portrait)';
          break;
        default:
          break;
      }
      buttons.push(
        <button
          key={key}
          onClick={props.setHardware}
          className={style.hardware}
          value={key.replace('--', '')}
          title={`View on ${title}`}
        >
          {icon}
        </button>
      );
    }
  }

  return buttons.length > 1 ? (
    <menu className={style.container}>{buttons}</menu>
  ) : null;
};

export default HardwareMenu;
