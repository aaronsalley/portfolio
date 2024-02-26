import Image, { ImageProps } from 'next/image';
import styles from './index.module.scss';

interface Links {
  title: string;
  uri: string;
}

export interface Feature {
  title: string;
  excerpt: string;
  skills: string[];
  links: Links[];
  image: ImageProps;
}

export default function Feature({
  title,
  excerpt,
  skills,
  links,
  image,
}: Feature) {
  const SkillsList = ({ items }: { items: string[] }) => {
    if (!items || items.length < 1) return null;

    let list = items.map((item: string, i: number) => {
      return <li key={i}>{item}</li>;
    });

    return (
      <aside>
        <h3>Skills</h3>
        <ul>{list}</ul>
      </aside>
    );
  };

  const ReadingList = ({ items }: { items: Links[] }) => {
    if (!items || items.length < 1) return null;

    let list = items.map(({ title, uri }: Links, i: number) => {
      return (
        <li key={i}>
          <a href={uri} target='_blank'>
            {title}
          </a>
        </li>
      );
    });

    return (
      <aside>
        <h3>Read More</h3>
        <ul>{list}</ul>
      </aside>
    );
  };

  return (
    <article className={styles['container']}>
      <div>
        <header>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </header>
        <SkillsList items={skills} />
        <ReadingList items={links} />
      </div>
      <Image src={image?.src} alt={image?.alt} />
    </article>
  );
}
