import Image from 'next/image';
import styles from './index.module.scss';

export default function Sidebar({
  site_logo = '/#',
  menu_items = [
    {
      title: {
        rendered: 'Title: rendered',
      },
      url: '#',
    },
    {
      title: {
        rendered: 'Title: rendered',
      },
      url: '#',
    },
    {
      title: {
        rendered: 'Title: rendered',
      },
      url: '#',
    },
    {
      title: {
        rendered: 'Title: rendered',
      },
      url: '#',
    },
  ],
}) {
  const list = menu_items.map((items, i) => {
    return <li key={i}>{items.title.rendered}</li>;
  });

  return (
    <aside className={styles['container']}>
      <menu>{list}</menu>
      {/* branding - http://aarons-macbook-pro.local/wp-json/wp/v2/settings */}
      <Image src={site_logo} alt={''} width={0} height={0} />
    </aside>
  );
}
