import { site } from '@/src/lib/testdata';
import Link from 'next/link';
import styles from './index.module.scss';

interface SocialItem {
  uri: string;
  label: string;
  target: string;
  cssClasses: string[];
}
export interface SiteFooter {
  title: string;
  contact: any;
  social_items: SocialItem[];
}

export default function SiteFooter({
  title = site.title,
  contact = site.contact,
  social_items = site.socials,
}: SiteFooter) {
  const SocialMenu = ({ items }: { items: SocialItem[] }) => {
    if (!items) return null;

    let list;
    list = items.map(({ uri, label, target, cssClasses: icon }, i) => {
      return (
        <li key={i}>
          <Link href={uri} target={target}>
            <i className={icon.join(' ')}></i>
            <label>{label}</label>
          </Link>
        </li>
      );
    });

    return <nav>{list}</nav>;
  };

  return (
    <footer className={styles['container']}>
      <SocialMenu items={social_items} />
      <small>
        © {new Date().getFullYear()} {title}. All Rights Reserved. Designed and
        developed by me with 🖤 in {contact.city}.
      </small>
    </footer>
  );
}
