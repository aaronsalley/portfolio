import { post } from '@/src/inc/post';
import InnovationList from '../../organisms/InnovationList';
import WorkList from '../../organisms/WorkList';
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
    title: string;
    uri: string;
  };
}
export default function Home({
  site_title = 'Aaron Salley',
  excerpt = 'Senior Product Manager at MSK Cancer Center supporting a portfolio of new health consumer solutions. Previously directed mobile e-commerce at B&H Photo, and led cross-functional teams, delivered innovations at Intry.',
  work = [
    {
      title: 'foo',
      excerpt: 'bar',
      uri: 'bat',
    },
  ],
  cases = [
    {
      title: 'foo',
      excerpt: 'bar',
      uri: 'bat',
    },
  ],
}: HomePage) {
  return (
    <main className={styles['container']}>
      <section>
        <h1>
          {'Hey there, '} <br /> {"I'm "}
          <span>{site_title}</span>
          <br /> — {excerpt}
        </h1>
      </section>
      <WorkList {...work} />
      <InnovationList {...cases} />
    </main>
  );
}
