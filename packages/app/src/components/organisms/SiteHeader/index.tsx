import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export interface SiteHeader {
  title: string;
  site_logo: string;
  menu_items: [
    {
      label: string;
      uri: string;
    }
  ];
}

export default function SiteHeader({
  title = 'Title',
  site_logo = '/#',
  menu_items = [
    {
      label: 'Label',
      uri: '#',
    },
  ],
}: SiteHeader) {
  const Nav = (props: any) => {
    const list = props.menu_items?.map((item: any, key: any) => {
      return (
        <Link className='nav-link' href={item.uri} key={key}>
          {item.label}
        </Link>
      );
    });
    return <nav className='navbar-nav'>{list}</nav>;
  };

  return (
    <header className={styles['container']}>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div>
          <Link className='navbar-brand' href='/'>
            <Image src={site_logo} alt={title} width={0} height={0} />
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
            {/* site nav - http://aarons-macbook-pro.local/wp-json/wp/v2/menu-items */}
            <Nav menu_items={menu_items} />
          </div>
        </div>
      </nav>
    </header>
  );
}
