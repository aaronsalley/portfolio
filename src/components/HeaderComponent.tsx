"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import calculatedCSS from "../utils/calculatedCSS";
import styles from "./header.module.scss";

import MemojiComponent from "./MemojiComponent";

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
      {windowWidth > mediaBreakpoint ? (
        <MenuItems
          menuItems={[
            { url: "", title: "About" },
            { url: "", title: "Work" },
            { url: "", title: "Services" },
            { url: "", title: "Thinking" },
            { url: "", title: "Connect" },
          ]}
        />
      ) : null}
    </header>
  );
}
