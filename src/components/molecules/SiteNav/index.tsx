import React, { ReactComponentElement } from 'react';
import Link from 'next/link';
import style from './index.module.scss';

const SiteNavItem = (props: any) => {
  let {
    classes = [],
    url = '',
    title = '',
  }: { classes: any; url: string; title: string } = props;
  classes.push('item');
  classes = classes.filter(Boolean);

  const match = new RegExp(/ ^http(s)?:\/\/ /i);
  if (match.test(url)) {
    url = url.split('/').splice(3).filter(Boolean).join('/');
  }

  return (
    <li
      className={classes.map((className: string) => {
        return style[className];
      })}
    >
      <Link href={`${url}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const SiteNav = (props: any): ReactComponentElement<'ul'> => {
  const items = props.items.map((item: any, i: number) => {
    return <SiteNavItem {...item} key={i} />;
  });

  return <ul className={style.container}>{items}</ul>;
};

export default SiteNav;
