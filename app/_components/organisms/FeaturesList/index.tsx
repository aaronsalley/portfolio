import Feature, { Feature as FeatureProps } from '../../molecules/Feature';
import styles from './index.module.scss';

export default function FeaturesList({
  children,
}: {
  children: FeatureProps[];
}) {
  if (!children) return null;

  let features;
  features = children.map((props: FeatureProps, i: number) => {
    return <Feature {...props} key={i} />;
  });

  return <section className={styles['container']}>{features}</section>;
}
