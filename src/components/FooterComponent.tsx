"use server";

import Link from "next/link";
import styles from "./footer.module.scss";

import { links, socials, strings } from "../data/constants";
import ButtonComponent from "./ButtonComponent";

export default async function FooterComponent() {
  const LinkItems = ({ links }: { links: any[] }) => {
    const items = [];
    const size = links.length;

    links.map((link, i) => {
      const { url, label } = link;

      items.push(
        <li key={i}>
          <Link href={url} target="_blank">
            {label}
          </Link>
        </li>
      );
      if (i + 1 < size) items.push(<li key={`${i}.5`}>{`//`}</li>);
    });
    return <ul>{items}</ul>;
  };

  return (
    <footer className={styles.container}>
      <div>
        <ButtonComponent
          url={links.behance.url}
          label={strings.READ_CASE_STUDIES}
        />
        <ButtonComponent url={links.medium.url} label={strings.READ_THOUGHTS} />
        <ButtonComponent url={links.upwork.url} label={strings.HIRE_ME} />
        <LinkItems links={socials} />
      </div>
      <div>{strings.copyright()}</div>
    </footer>
  );
}
