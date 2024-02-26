import { Metadata } from 'next';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Resume',
};

export default function Page() {
  return (
    <main className={styles['container']}>
      <iframe
        src='https://drive.google.com/file/d/1-0e11gBw4g0rCdQzg25hYB8PqZwtTNuy/preview'
        width='100%'
        height='480'
        allow='autoplay'
      ></iframe>
    </main>
  );
}
