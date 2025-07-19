'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Icon from '@/app/icon.svg';
import EmailSubscribeForm from './EmailSubscribeForm';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import Link from 'next/link';

export default function TopBar() {
  const [isMenuOpen, setMenu] = useState(false);

  const [isSticky, setSticky] = useState(false);
  const handleNav = () => {
    const scrollPosition = window.scrollY;
    const navbar = document.getElementsByTagName('header')[0] as HTMLElement;
    const hero = document.getElementsByClassName('will-stick')[0];
    if (!hero || !navbar) return;

    // if scroll position >= hero height - navbar height, state = sticky
    if (navbar && hero)
      setSticky(scrollPosition >= hero.scrollHeight - navbar.scrollHeight);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleNav);

    return () => {
      window.removeEventListener('scroll', handleNav);
    };
  }, []);

  const style = [
    'flex justify-between w-full py-4 lg:pt-5 lg:pb-6 px-5 z-10',
    isMenuOpen ? 'bg-salley-black' : 'bg-transparent',
    isSticky || isMenuOpen ? 'fixed top-0 z-50' : 'absolute',
    !isSticky || isMenuOpen
      ? 'border-b border-salley-white text-salley-white'
      : null,
  ].join(' ');

  return (
    <header className={style}>
      <div className='flex items-center gap-4 lg:gap-6'>
        <MenuButton
          isSticky={isSticky}
          isMenuOpen={isMenuOpen}
          setMenu={setMenu}
        />
        {!isSticky || isMenuOpen ? <Brand /> : null}
      </div>
      {isMenuOpen ? <NavMenu /> : null}
    </header>
  );
}

function Brand() {
  return (
    <Link href='/'>
      <div className='z-50 flex items-center gap-2'>
        <Image src={Icon} alt='Aaron Salley' width={24} />
        {Icon.svg}
        <p className='hidden sm:block font-[Oswald] uppercase z-50'>
          Aaron Salley
        </p>
      </div>
    </Link>
  );
}

function MenuButton({
  isSticky,
  isMenuOpen,
  setMenu,
}: {
  isSticky?: boolean;
  isMenuOpen: boolean;
  setMenu: (open: boolean) => void;
}) {
  const style = [
    [
      'flex flex-col items-center',
      'before:block before:h-[0.125rem] before:w-[1.875rem] before:mb-[0.3125rem] before:rotate-0 before:bg-current before:transition-margin before:duration-250 before:ease-in-out',
      'after:block after:h-[0.125rem] after:w-[1.875rem] after:mt-[0.3125rem] after:rotate-0 after:bg-current after:transition-margin after:duration-250 after:ease-in-out',
    ].join(' '),
    !isMenuOpen
      ? undefined
      : [
          'before:mb-[0] before:rotate-[45deg] before:translate-y-[1px]',
          'after:mt-[0] after:rotate-[-45deg] after:translate-y-[-1px]',
        ].join(' '),
    isSticky && !isMenuOpen ? 'text-salley-accent' : undefined,
  ].join(' ');

  return (
    <button
      onClick={() => setMenu(!isMenuOpen)}
      className={'size-[1.875rem] z-50 scale-60 lg:scale-80'}
    >
      <i className={style}></i>
    </button>
  );
}

const style = {
  browse: ['flex flex-col gap-4 w-1/2', 'lg:gap-6 md:w-auto'].join(' '),
  quickLinks: ['flex flex-col gap-4 w-1/2', 'lg:gap-6 md:w-auto'].join(' '),
  articles: ['w-1/2 h-50 bg-salley-white/50 mt-8', 'lg:mt-0'].join(' '),
  email: ['w-full my-8 max-w-lg', 'lg:mt-16'].join(' '),
  socialLinks: ['flex gap-4 w-full'].join(' '),
  navLinks: [
    'flex flex-col font-sans uppercase tracking-widest gap-4',
    'lg:gap-6',
  ].join(' '),
  linksHeader: 'uppercase font-[Oswald] font-bold',
};

function NavMenu() {
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => setIsMobile(window.innerWidth < 640);
  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <menu
      className={
        'fixed top-[63px] lg:top-[75px] left-0 size-full bg-salley-black/50'
      }
    >
      <div className='flex flex-wrap sm:flex-row justify-between p-7 sm:p-15 pb-17 bg-salley-black'>
        {isMobile ? (
          <>
            <BrowseLinks />
            {/* <QuickLinks /> // TODO: restore */}
            {/* <Articles /> // TODO: restore */}
            <EmailSubscribeForm className={style.email} />
            <SocialLinks className={style.socialLinks} />
          </>
        ) : (
          <>
            <div className='flex flex-wrap max-w-1/2'>
              <BrowseLinks />
              {/* <QuickLinks /> // TODO: restore */}
              <EmailSubscribeForm className={style.email} />
              <SocialLinks className={style.socialLinks} />
            </div>
            <div className='flex grow-1'>
              {/* <Articles /> // TODO: restore */}
            </div>
          </>
        )}
      </div>
    </menu>
  );
}

function BrowseLinks() {
  return (
    <div className={style.browse}>
      <p className={style.linksHeader}>Browse</p>
      <NavLinks className={style.navLinks} />
    </div>
  );
}

function QuickLinks() {
  return (
    <div className={style.quickLinks}>
      <p className={style.linksHeader}>Quick Links</p>
    </div>
  );
}

function Articles() {
  const [articles, setArticles] = useState<unknown[] | null>(null);
  const fetchArticles = async () => {
    try {
      // TODO: fetch articles from an API or database
      const articles = [
        { title: 'Article 1', description: 'Description 1' },
        { title: 'Article 2', description: 'Description 2' },
        { title: 'Article 3', description: 'Description 3' },
      ];
      setArticles(articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  if (!articles || articles.length === 0) {
    return;
  }

  return articles.map((article, index) => {
    if (index < 2) {
      return (
        <Article
          key={index}
          data={article as { title: string; description: string }}
        />
      );
    }
  });
}

function Article({
  data: { title, description },
}: {
  data: { title: string; description: string };
}) {
  return (
    <article className={style.articles}>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
