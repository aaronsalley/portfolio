import Link from 'next/link';
import styles from './index.module.scss';

interface Button {
  outline?: boolean;
  children: any;
}

export default function Button({ outline = false, children }: Button) {
  const style = ['button', outline ? 'outline' : null];

  return (
    <Link href={''} className={style.join(' ')}>
      {children}
    </Link>
  );
}
