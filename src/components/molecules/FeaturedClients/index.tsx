import React, { ReactComponentElement } from 'react';
import { ReactComponent as BHPhotoLogo } from '../../../assets/media/bhphoto.svg';
import { ReactComponent as MTFLogo } from '../../../assets/media/mtf.svg';
import { ReactComponent as BNYMellonLogo } from '../../../assets/media/bnymellon.svg';
import { ReactComponent as RaviManglaniLogo } from '../../../assets/media/rm+compass.svg';
import { ReactComponent as IntryLogo } from '../../../assets/media/intry.svg';

import styles from './index.module.scss';

const FeaturedClients = (props: any): ReactComponentElement<'ul'> => {
  return (
    <ul className={styles.container}>
      <li className={styles.logo}>
        <BHPhotoLogo title='B&H Photo Video' />
      </li>
      <li className={styles.logo}>
        <MTFLogo title='Musical Theatre Factory' />
      </li>
      <li className={styles.logo}>
        <BNYMellonLogo title='BNY Mellon' />
      </li>
      <li className={styles.logo}>
        <RaviManglaniLogo title='Ravi Manglani + Compass' />
      </li>
      <li className={styles.logo}>
        <IntryLogo title='Intry' />
      </li>
    </ul>
  );
};

export default FeaturedClients;
