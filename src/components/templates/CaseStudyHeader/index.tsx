import React from 'react';
import { connect } from 'react-redux';
import Device from '../../molecules/Device';
import PlatformList from '../../atoms/PlatformList';
import style from './index.module.scss';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    featured_image: ownProps.featured_image[state.colorScheme],
  };
};

const CreateList = (props: any) => {
  const { items: listItems } = props;
  if (listItems === undefined) return null;
  const items = listItems.map((item: any, i: string) => {
    return (
      <li className={style.item} key={i}>
        {item}
      </li>
    );
  });
  return <ul className={style.items}>{items}</ul>;
};

const CaseStudyHeader = (props: any): any => {
  const {
    title,
    client,
    summary,
    platforms,
    roles,
    tools,
    date,
    device,
    setHardware,
    featured_image: hardware,
  } = props;

  return (
    <header className={style.wrapper}>
      <section className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <h2 className={style.client}>{client}</h2>
        <p className={style.summary}>{summary}</p>
        <PlatformList items={platforms} />
      </section>
      <Device device={device} setHardware={setHardware} hardware={hardware} />
      <aside className={style.container}>
        <section className={style.info}>
          <h5>Role</h5>
          <CreateList items={roles} />
        </section>
        <section className={style.info}>
          <h5>Timeframe</h5>
          <p className={style.item}>{date}</p>
        </section>
        <section className={style.info}>
          <h5>Tools</h5>
          <CreateList items={tools} />
        </section>
      </aside>
    </header>
  );
};

export default connect(mapStateToProps)(CaseStudyHeader);
