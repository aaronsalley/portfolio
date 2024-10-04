import Link from "next/link";
import styles from "./footer.module.scss";

const Button = ({ url, label }) => {
  return (
    <Link href={url} target="_blank">
      {label}
    </Link>
  );
};

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
    if (i + 1 < size) items.push(<li key={i}>{`//`}</li>);
  });
  return <ul>{items}</ul>;
};

export default function FooterComponent() {
  return (
    <footer className={styles.container}>
      <div>
        <Button
          url={process.env.NEXT_PUBLIC_BEHANCE_URL}
          label={"Read case studies for my previous work"}
        />
        <Button
          url={process.env.NEXT_PUBLIC_MEDIUM_URL}
          label={"Checkout my thoughts on Medium"}
        />
        <Button
          url={process.env.NEXT_PUBLIC_UPWORK_URL}
          label={"Hire me on UpWork"}
        />
        <LinkItems
          links={[
            { url: process.env.NEXT_PUBLIC_LINKEDIN_URL, label: "LinkedIn" },
            { url: process.env.NEXT_PUBLIC_GITHUB_URL, label: "GitHub" },
            { url: process.env.NEXT_PUBLIC_RESUME_URL, label: "Resume" },
            { url: process.env.NEXT_PUBLIC_EMAIL, label: "Email" },
            {
              url: process.env.NEXT_PUBLIC_APPLE_MUSIC_URL,
              label: "Apple Music",
            },
          ]}
        />
      </div>
      <div></div>
      <div>{`© 2024 Aaron Salley LLC. All rights reserved. Made with 🖤 in NYC.`}</div>
    </footer>
  );
}
