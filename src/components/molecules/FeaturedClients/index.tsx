import React, { ReactComponentElement } from 'react';
import { ReactComponent as BHPhotoLogo } from '../../../assets/media/Aaron-Salley-Disruptv-NYC-bhphoto-logo.svg';
import { ReactComponent as MTFLogo } from '../../../assets/media/Aaron-Salley-Disruptv-NYC-mtf-logo.svg';
import { ReactComponent as BNYMellonLogo } from '../../../assets/media/Aaron-Salley-Disruptv-NYC-bnymellon-logo.svg';
import { ReactComponent as RaviManglaniLogo } from '../../../assets/media/Aaron-Salley-Disruptv-NYC-rm+compass-logo.svg';
import { ReactComponent as IntryLogo } from '../../../assets/media/Aaron-Salley-Disruptv-NYC-intry-logo.svg';

import style from './index.module.scss';

const FeaturedClients = (props: any): ReactComponentElement<'ul'> => {
  return (
    <ul className={style.container}>
      <li className={style.logo}>
        <BHPhotoLogo title='B&H Photo Video' />
      </li>
      <li className={style.logo}>
        <MTFLogo title='Musical Theatre Factory' />
      </li>
      <li className={style.logo}>
        <BNYMellonLogo title='BNY Mellon' />
      </li>
      <li className={style.logo}>
        <RaviManglaniLogo title='Ravi Manglani + Compass' />
      </li>
      <li className={style.logo}>
        <IntryLogo title='Intry' />
      </li>
    </ul>
  );
};

export default FeaturedClients;
