import Image, { ImageProps } from 'next/image';
import styles from './index.module.scss';

interface Press {
  title: string;
  uri: string;
}

export interface Feature {
  title: string;
  excerpt: string;
  skills: string[];
  press: Press[];
  image: ImageProps;
}

export default function Feature({
  title,
  excerpt,
  skills,
  press,
  image,
}: Feature) {
  const SkillsList = ({ items }: { items: string[] }) => {
    if (!items) return null;

    let list = items.map((item: string, i: number) => {
      return <li key={i}>{item}</li>;
    });

    return <ul>{list}</ul>;
  };

  const PressList = ({ items }: { items: Press[] }) => {
    if (!items) return null;

    let list = items.map(({ title, uri }: Press, i: number) => {
      return <li key={i}>{title}</li>;
    });

    return <ul>{list}</ul>;
  };

  return (
    <article className={styles['container']}>
      <div>
        <header>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </header>
        <aside>
          <h3>Skills</h3>
          <SkillsList items={skills} />
        </aside>
        <aside>
          <h3>Press</h3>
          <PressList items={press} />
        </aside>
      </div>
      <Image src={image?.src} alt={image?.alt} />
    </article>
  );
}
