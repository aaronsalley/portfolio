import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import NavItems from '../../molecules/SiteNav';
import style from './index.module.scss';

const mapPropsToState = (state: any, ownProps: any) => {
  const { menus, homepage } = state;
  return {
    siteNav: menus.SiteNav,
    homepage,
  };
};

const SiteHeader = (props: any) => {
  return (
    <header className={style.container}>
      <Link href='/'>
        <a className={style.SiteLogo}>Aaron Salley & Disruptv LLC</a>
      </Link>
      <nav>
        <NavItems
          items={
            props.homepage.includes('aaronsalley')
              ? props.siteNav.aaronsalley
              : props.siteNav.disruptv
          }
        />
      </nav>
    </header>
  );
};

export default connect(mapPropsToState)(SiteHeader);
