'use client';

import { useEffect, useState } from 'react';
import NavMenu from './NavMenu';

export interface TopBar {
  pages: any[];
  links: any[];
  insights: any[];
  socials: Record<string, { href: string; icon: string }>;
}

export default function TopBar(props: TopBar) {
  const [isMenuOpen, setMenu] = useState(false);

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleNav = () => {
      const scrollPosition = window.scrollY;

      const navbar = document.getElementsByTagName('header')[0] as HTMLElement;
      const hero = document.getElementsByClassName('will-stick')[0];
      if (!hero || !navbar) return;

      // if scroll position >= hero height - navbar height, state = sticky
      if (navbar && hero)
        setSticky(scrollPosition >= hero.scrollHeight - navbar.scrollHeight);
    };
    window.addEventListener('scroll', handleNav);

    return () => {
      window.removeEventListener('scroll', handleNav);
    };
  });

  const iconStyles = {
    base: [
      'flex flex-col items-center',
      'before:block before:h-[0.125rem] before:w-[1.875rem] before:mb-[0.3125rem] before:rotate-0 before:bg-current before:transition-margin before:duration-250 before:ease-in-out',
      'after:block after:h-[0.125rem] after:w-[1.875rem] after:mt-[0.3125rem] after:rotate-0 after:bg-current after:transition-margin after:duration-250 after:ease-in-out',
    ].join(' '),
    open: [
      'before:mb-[0] before:rotate-[45deg] before:translate-y-[1px]',
      'after:mt-[0] after:rotate-[-45deg] after:translate-y-[-1px]',
    ].join(' '),
  };

  return (
    <>
      <header
        className={[
          'flex justify-between items-center w-full py-4 lg:pt-5 lg:pb-6 px-5 z-10',
          isMenuOpen ? 'bg-salley-black' : 'bg-transparent',
          isSticky || isMenuOpen ? 'fixed top-0 z-50' : 'absolute',
          !isSticky || isMenuOpen
            ? 'border-b border-salley-white text-salley-white'
            : null,
        ].join(' ')}
      >
        <button
          onClick={() => setMenu(!isMenuOpen)}
          className={'size-[1.875rem] z-50 scale-60 lg:scale-100'}
        >
          <i
            className={[
              iconStyles.base,
              isMenuOpen ? iconStyles.open : undefined,
              isSticky && !isMenuOpen ? 'text-salley-accent' : undefined,
            ].join(' ')}
          ></i>
        </button>
        {!isSticky || isMenuOpen ? (
          <p className='font-[Oswald] text-xl lg:text-3xl font-medium uppercase z-50'>
            Aaron Salley
          </p>
        ) : null}
        <span></span>
        {isMenuOpen ? <NavMenu {...props} /> : null}
      </header>
    </>
  );
}
