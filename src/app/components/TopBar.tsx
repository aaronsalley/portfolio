'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TopBar() {
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
    <header
      className={[
        'flex justify-between w-full pt-5 pb-6 px-5',
        isSticky
          ? 'fixed top-0 z-50'
          : 'absolute border-b border-slate-50 text-slate-50',
      ].join(' ')}
    >
      <button
        onClick={() => setMenu(!isMenuOpen)}
        className={'size-[1.875rem]'}
      >
        <i
          className={[
            iconStyles.base,
            isMenuOpen ? iconStyles.open : undefined,
          ].join(' ')}
        ></i>
      </button>
      {!isSticky ? (
        <p className='font-[Oswald] text-3xl uppercase'>Aaron Salley</p>
      ) : null}
      <span></span>
    </header>
  );
}
