import Link from 'next/link';
import { TopBar } from './TopBar';
import SocialLinks from './SocialLinks';
import Image from 'next/image';

export default function NavMenu({ pages, links, insights, socials }: TopBar) {
  const styles = getComputedStyle(document.documentElement);

  const Browse = () =>
    pages.length > 0 ? (
      <ul className='flex flex-col gap-3 text-xs lg:gap-4 lg:text-base'>
        <label className='font-[oswald] font-medium uppercase'>Browse</label>
        {pages.map((page) => (
          <Link key={page.name} href={page.href}>
            <li className='font-sans list-none uppercase tracking-widest'>
              {page.name}
            </li>
          </Link>
        ))}
      </ul>
    ) : null;

  const QuickLinks = () =>
    links.length > 0 ? (
      <ul className='flex flex-col gap-3 text-xs lg:gap-4 lg:text-base'>
        <label className='font-[oswald] uppercase font-medium'>
          Quick Links
        </label>
        {links.map((page) => (
          <Link key={page.name} href={page.href}>
            <li className='font-sans list-none uppercase tracking-widest'>
              {page.name}
            </li>
          </Link>
        ))}
      </ul>
    ) : null;

  const Insights = () =>
    insights.length > 0 ? (
      <aside className='grid grid-cols-2 gap-8 max-w-1/1 sm:max-w-1/2'>
        {insights.slice(0, 2).map((article, index) => (
          <article key={index} className='flex flex-col gap-2'>
            {article.imageUrl ? (
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={300}
                height={400}
                className='object-cover aspect-3/4'
              />
            ) : null}
            <p className='font-sans uppercase text-xs sm:text-sm tracking-widest text-current/75'>
              Category
            </p>
            <h2 className='font-[oswald] uppercase text-lg sm:text-2xl font-medium'>
              {article.title}
            </h2>
            <p className='font-sans font-light'>{article.description}</p>
          </article>
        ))}
      </aside>
    ) : null;

  return (
    <menu className='fixed top-0 left-0 size-full bg-salley-black/50'>
      <div className='flex flex-col sm:flex-row justify-between mt-[63px] lg:mt-[81px] p-7 sm:p-15 pb-17 bg-salley-black'>
        <div>
          <nav className='flex mb-16 gap-15 lg:gap-30'>
            <Browse />
            <QuickLinks />
          </nav>
          <form className='w-[50%] flex-col mb-8'></form>
          <SocialLinks socials={socials} className='hidden sm:flex w-[50%]' />
        </div>
        <Insights />
      </div>
    </menu>
  );
}
