import Link from "next/link";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import style from "./index.module.scss";

const SiteHeader = ({
  siteTitle = useAppSelector((state: RootState) => state.siteTitle),
  brandingURL = useAppSelector((state: RootState) => state.brandingURL),
  pages = useAppSelector((state: RootState) => state.pages),
}: React.ComponentProps<any>): React.ReactElement => {
  let items = null;

  if (pages) {
    items = pages.map((page: any, i: number) => {
      if (page.href) {
        return (
          <li key={i}>
            <Link href={page["href"]}>{page.title}</Link>
          </li>
        );
      }
    });
  }

  return (
    <header className={style["container"]}>
      <Link href={"/"}>
        <a>
          <img src={brandingURL.src} height={"75px"} alt={siteTitle} />
        </a>
      </Link>
      <span></span>
      <nav>
        <ul>{items}</ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
