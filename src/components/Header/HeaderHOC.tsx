"use client";

import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function HeaderHOC({ children }: any): any {
  const [isMenuOpen, setMenu] = useState(false);

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleNav = () => {
      // Get height of navbar
      const navbar = document.getElementsByClassName(
        style.container,
      )[0] as HTMLElement;
      // Get height of hero
      const hero = document.getElementById("hero");
      // Get scroll position
      const scrollPosition = window.scrollY;
      // if scroll position >= hero height - navbar height, state = sticky
      if (navbar && hero)
        setSticky(scrollPosition >= hero.scrollHeight - navbar.scrollHeight);
    };
    window.addEventListener("scroll", handleNav);

    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  });

  return (
    <header
      className={[
        style.container,
        isSticky ? style.sticky : null,
        isMenuOpen ? style.open : null,
      ].join(" ")}
    >
      <MenuButton isMenuOpen={isMenuOpen} setMenu={setMenu} />
      <p
        className={[
          "headline text-[2rem] text-center",
          isMenuOpen ? style.open : null,
        ].join(" ")}
      >
        Aaron Salley
      </p>
      <span></span>
      {isMenuOpen ? children : null}
    </header>
  );
}

function MenuButton({ isMenuOpen, setMenu }) {
  return (
    <button
      onClick={() => setMenu(!isMenuOpen)}
      className={style["menu-button"]}
    >
      <i className={isMenuOpen ? style.open : null}></i>
    </button>
  );
}
