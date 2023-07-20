import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export default function Sidebar({
  site_logo = '/#',
  menu_items = [
    {
      label: 'Title: rendered',
      uri: '#',
      target: '_blank' || null,
      cssClasses: [],
    },
  ],
}) {
  const SocialMenu = (items: any) => {
    if (!items) return null;

    const list = menu_items.map(
      ({ uri, label, target, cssClasses: icon }, i) => {
        return (
          <li key={i}>
            <Link href={uri} target={target}>
              <i className={icon.join(' ')}></i>
              <label>{label}</label>
            </Link>
          </li>
        );
      }
    );

    return <menu>{list}</menu>;
  };

  return (
    <aside className={styles['container']}>
      <SocialMenu {...menu_items} />
      {/* branding - http://aarons-macbook-pro.local/wp-json/wp/v2/settings */}
      <Image src={site_logo} alt={''} width={0} height={0} />
    </aside>
  );
}
