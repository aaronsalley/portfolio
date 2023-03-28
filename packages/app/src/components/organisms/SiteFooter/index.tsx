import styles from './index.module.scss';

export default function SiteFooter() {
  return (
    <div className={styles['container']}>
      © Copyright {new Date().getFullYear()}. All Rights Reserved. Designed and
      developed by me with 🖤 in NYC.
    </div>
  );
}
