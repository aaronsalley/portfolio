import Link from 'next/link';

export default function Button({
  children,
  onClick,
  href,
  variant,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: string;
}) {
  const classNames = [
    'px-4 py-2 bg-burnt-umber text-warm-ivory rounded transition',
    variant === 'hollow' &&
      'bg-transparent border border-burnt-umber text-burnt-umber!',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
