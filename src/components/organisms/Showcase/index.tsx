import React from 'react';
import styles from './index.module.scss';

const Showcase = (props: any): any => {
  return (
    <aside className={styles.container}>
      <p>
        I provide services to help start, grow, and sustain digital products
        from strategy to execution and management. Whether you&apos;re ideating
        something new or continuing a digital transformation, we can bring your
        ideas to life.
      </p>
      <p>
        Services are available along the entire product lifecycle including
        devOps — ranging from market research, interface & interaction design,
        and prototyping through full-stack development and cloud deployments.
      </p>
      <p>
        I have helped advance product vision, conceptualization, and management,
        go-to-market efforts, and development/delivery cycles for early-stage
        startups and enterprise firms. Let&apos;s chat.
      </p>
    </aside>
  );
};

export default Showcase;
