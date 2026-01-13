'use client';

import { useEffect, useState } from 'react';
import EmailSubscribeForm from './FormEmailSubscribe';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import Brand from './Brand';

export default function TopBar() {
  const [isMenuOpen, setMenu] = useState(false);

  const [isSticky, setSticky] = useState(false);

  const handleNav = () => {
    const navbar = document.getElementsByTagName('header')[0] as HTMLElement;
    const hero = document.getElementsByClassName('will-stick')[0];
    const scrollPosition = window.scrollY;

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

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-logo',
      !isMenuOpen ? 'var(--color-salley-dark)' : 'var(--color-salley-light)'
    );
  }, [isMenuOpen]);

  const classNames = [
    'flex justify-between w-full py-4 lg:pt-5 lg:pb-6 px-8 z-10',
    isMenuOpen
      ? 'bg-black/95 border-b border-salley-light text-salley-light'
      : 'bg-transparent',
    isSticky || isMenuOpen ? 'fixed top-0 z-50' : 'absolute',
  ].join(' ');

  return (
    <header className={classNames}>
      <Brand />
      <MenuButton
        isSticky={isSticky}
        isMenuOpen={isMenuOpen}
        setMenu={setMenu}
      />
      {isMenuOpen ? <NavMenu /> : null}
    </header>
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
    isSticky && !isMenuOpen ? 'text-salley-secondary' : undefined,
  ].join(' ');

  return (
    <button
      onClick={() => setMenu(!isMenuOpen)}
      className={'z-50 size-7.5 scale-60 lg:scale-80'}
    >
      <i className={style}></i>
    </button>
  );
}

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
      className={'fixed top-16.25 left-0 size-full bg-black/50 lg:top-19.25'}
    >
      <div className="flex flex-wrap justify-between bg-black/90 p-7 pb-17 sm:flex-row sm:p-15">
        {isMobile ? (
          <>
            <BrowseLinks />
            <QuickLinks />
            <span className="flex-1/1 grow"></span>
            {/* <Articles /> */}
            <EmailSubscribeForm className="my-8 w-full max-w-lg lg:mt-16" />
            <SocialLinks className="mt-8 flex w-full gap-4" />
          </>
        ) : (
          <>
            <div className="flex w-full max-w-1/2 flex-wrap">
              <BrowseLinks />
              <QuickLinks />
              <span className="flex-1/1 grow"></span>
              <EmailSubscribeForm className="my-8 w-full max-w-lg lg:mt-16" />
              <SocialLinks className="mt-8 flex w-full gap-4" />
            </div>
            <div className="flex grow">{/* <Articles /> */}</div>
          </>
        )}
      </div>
    </menu>
  );
}

function BrowseLinks() {
  return (
    <div className="flex w-1/2 flex-col gap-4 md:w-auto md:min-w-1/4 lg:gap-6">
      <p className="font-serif font-bold uppercase">Browse</p>
      <NavLinks className="flex flex-col gap-4 font-sans tracking-widest uppercase lg:gap-6" />
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="flex w-1/2 flex-col gap-4 md:w-auto md:min-w-1/4 lg:gap-6">
      <p className="font-serif font-bold uppercase">Quick Links</p>
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
    <article className="mt-8 h-50 w-1/2 bg-salley-light/50 lg:mt-0">
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
