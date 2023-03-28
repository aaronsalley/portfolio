import { post } from '@/src/inc/post';
import InnovationItem from '../../molecules/InnovationItem';
import WorkItem from '../../molecules/WorkItem';
import styles from './index.module.scss';

interface HomePage {
  site_title: string;
  excerpt: string;
  work: post[];
  cases: post[];
  blog: post[];
  bio: string;
  email: string;
  phone: string;
  address: string;
  resume: {
    title: { rendered: string };
    link: string;
  };
}

export default function Home({
  site_title = 'Aaron Salley',
  excerpt = 'Senior Product Manager at MSK Cancer Center supporting a portfolio of new health consumer solutions. Previously directed mobile e-commerce at B&H Photo, and led cross-functional teams, delivered innovations at Intry.',
  work = [
    {
      title: { rendered: 'foo' },
      excerpt: { rendered: 'bar' },
      link: 'bat',
      meta: [],
    },
  ],
  cases = [
    {
      title: { rendered: 'foo' },
      excerpt: { rendered: 'bar' },
      link: 'bat',
      meta: [],
    },
  ],
}: HomePage) {
  const Work = (posts: any) => {
    const items = [];
    const maxPosts = Object.keys(posts).length;

    for (let i = 0; i < maxPosts; i++) {
      items.push(<WorkItem {...posts[i]} />);
    }

    return (
      <section id='work'>
        <h2>Product Work</h2>
        <ul>{items}</ul>
      </section>
    );
  };

  const Innovation = (posts: any) => {
    const items = [];
    const maxPosts = 3;

    for (let i = 0; i < maxPosts; i++) {
      items.push(<InnovationItem {...posts[i]} />);
    }

    return (
      <section id='cases'>
        <div>
          <h2>Strategy & Innovation</h2>
          <ul>{items}</ul>
        </div>
      </section>
    );
  };

  return (
    <main className={styles['container']}>
      <section>
        <h1>
          {'Hey there, '} <br /> {"I'm "}
          <span>{site_title}</span>
          <br /> — {excerpt}
        </h1>
      </section>
      <Work {...work} />
      <Innovation {...cases} />
    </main>
  );
}
