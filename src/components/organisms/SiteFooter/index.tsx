import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SocialMenu from '../../molecules/SocialMenu';
import style from './index.module.scss';

const mapPropsToState = (state: any, ownProps: any) => {
  const { menus, ready } = state;
  return {
    socialMenu: menus.SocialMenu,
    ready,
  };
};

const SiteFooter = (props: any) => {
  let [classes, setClasses] = useState(['container', 'docked']);

  const classNames = classes.map((className: string) => {
    return style[className];
  });

  return (
    <footer className={classNames.join(' ')}>
      <menu className={style.SocialMenu}>
        <SocialMenu items={props.socialMenu} />
      </menu>
      <small className={style.copyright}>
        © Copyright {new Date().getFullYear()}. All Rights Reserved.
      </small>
    </footer>
  );
};

export default connect(mapPropsToState)(SiteFooter);
