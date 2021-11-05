import Link from "next/link";
import { useAppSelector } from "../../../../data/data/store";

const SiteHeader = ({
  siteTitle = useAppSelector((state) => state.siteTitle),
  brandingURL = useAppSelector((state) => state.brandingURL),
  links = useAppSelector((state) => state.menus.SiteNav),
}: React.ComponentProps<any>): React.ReactElement => {
  let items = null;

  if (links) {
    items = links.map((link: any, i: number) => {
      return (
        <li key={i}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      );
    });
  }

  return (
    <header>
      <Link href="/">
        <img src={brandingURL} alt={siteTitle} />
      </Link>
      <span></span>
      <nav>
        <ul>{items}</ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
