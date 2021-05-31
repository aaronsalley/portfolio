import React from 'react';
// import { connect } from 'react-redux';
import Device from '../../atoms/Device';
import PlatformList from '../../atoms/PlatformList';
import HardwareMenu from '../../molecules/HardwareMenu';
import styles from './index.module.scss';

const CreateList = (props: any) => {
  const { items: listItems } = props;
  if (listItems === undefined) return null;
  const items = listItems.map((item: any, i: string) => {
    return (
      <li className={styles.item} key={i}>
        {item}
      </li>
    );
  });
  return <ul className={styles.items}>{items}</ul>;
};

const CaseStudyHeader = (props: any): any => {
  const {
    title,
    client,
    summary,
    platforms,
    roles,
    tools,
    timeframe,
    device,
    setHardware,
  } = props;

  return (
    <header className={styles.wrapper}>
      <section className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <h2 className={styles.client}>{client}</h2>
        <p className={styles.summary}>{summary}</p>
        <div>
          <PlatformList items={platforms} />
          <HardwareMenu setHardware={setHardware} />
        </div>
      </section>
      <Device device={device} />
      <aside className={styles.container}>
        <section className={styles.info}>
          <h5>Role</h5>
          <CreateList items={roles} />
        </section>
        <section className={styles.info}>
          <h5>Timeframe</h5>
          <p className={styles.item}>{timeframe}</p>
        </section>
        <section className={styles.info}>
          <h5>Tools</h5>
          <CreateList items={tools} />
        </section>
      </aside>
    </header>
  );
};

export default CaseStudyHeader;
