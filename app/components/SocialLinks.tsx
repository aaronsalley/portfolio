import Link from 'next/link';

export default function SocialLinks({
  socials,
  className,
}: {
  socials: Record<string, { href: string; icon: string }>;
  className?: string;
}) {
  return (
    <ul className={['flex items-center gap-6', className].join(' ')}>
      {Object.entries(socials).map(([name, service]) => (
        <Link key={name} href={service.href} className='list-none uppercase'>
          <li
            dangerouslySetInnerHTML={{ __html: service.icon }}
            className='fill-current size-4 lg:size-5'
          ></li>
        </Link>
      ))}
    </ul>
  );
}
