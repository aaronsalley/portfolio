"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site_nav } from "../data/constants";
import calculatedCSS from "../utils/calculatedCSS";
import MemojiComponent from "./MemojiComponent";
import styles from "./header.module.scss";

export default function HeaderComponent() {
  let [windowWidth, setWindowWidth] = useState(0);
  const [mediaBreakpoint, setMediaBreakpoint]: any = useState(0);

  useEffect(() => {
    setMediaBreakpoint(parseInt(calculatedCSS("--bs-breakpoint-lg")));

    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const MenuItems = ({ menuItems }: { menuItems: any[] }) => {
    const items = [];

    menuItems.map((item: any, i: number) => {
      const { url, title } = item;

      items.push(
        <li key={i}>
          <Link href={url}>{title}</Link>
        </li>
      );
    });

    return <ul>{items}</ul>;
  };

  return (
    <header className={styles.container}>
      <MemojiComponent />
      {/* Hiding until additional pages are created */}
      {/* {windowWidth > mediaBreakpoint ? (
        <MenuItems menuItems={site_nav} />
      ) : null} */}
    </header>
  );
}
