import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

interface NavItem {
  label: string;
  uri: string;
}
export interface SiteHeader {
  title: string;
  site_logo: string;
  menu_items: NavItem[];
}

export default function SiteHeader({
  title,
  site_logo,
  menu_items,
}: SiteHeader) {
  const SiteNav = ({ items }: { items: NavItem[] }) => {
    if (!items) return null;

    let list;
    list = items.map(({ uri, label }, i) => {
      return (
        <Link className='nav-link' href={uri} key={i}>
          {label}
        </Link>
      );
    });

    return <nav className='navbar-nav'>{list}</nav>;
  };

  return (
    <header className={styles['container']}>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <Link className='navbar-brand' href='/'>
          <Image
            src={site_logo}
            alt={`${title} memoji`}
            width={75}
            height={75}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          <SiteNav items={menu_items} />
        </div>
      </nav>
    </header>
  );
}
