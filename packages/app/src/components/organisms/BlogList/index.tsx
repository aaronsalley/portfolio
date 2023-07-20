import Link from 'next/link';
import styles from './index.module.scss';

export default function BlogList(posts: any) {
  if (!posts) return null;

  const items = [];
  const maxItems = Object.entries(posts).length;

  for (let i = 0; i < maxItems; i++) {
    items.push(
      <li key={i}>
        <Link href={posts[i].uri}>{posts[i].title}</Link>
      </li>
    );
  }

  return (
    <section className={styles['container']} id='blog'>
      <h2>Leadership</h2>
      <ul>{items}</ul>
    </section>
  );
}
