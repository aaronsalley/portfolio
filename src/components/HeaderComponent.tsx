import Link from "next/link";
import styles from "./header.module.scss";

import MemojiComponent from "./MemojiComponent";

export default function HeaderComponent() {
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
      <MenuItems
        menuItems={[
          { url: "", title: "About" },
          { url: "", title: "Work" },
          { url: "", title: "Services" },
          { url: "", title: "Thinking" },
          { url: "", title: "Connect" },
        ]}
      />
    </header>
  );
}
