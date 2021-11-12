import Link from "next/link";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import Branding from "../../atoms/Branding";
import style from "./index.module.scss";

const SiteHeader = (): React.ReactElement => {
  const pages = useAppSelector((state: RootState) => state.pages);
  let items = null;

  if (pages) {
    items = pages.map((page: any, i: number) => {
      if (page.href) {
        return (
          <li key={i}>
            <Link href={page["href"]}>
              <a>{page.title}</a>
            </Link>
          </li>
        );
      }
    });
  }

  return (
    <header className={style["container"]}>
      <span>
        <Branding />
      </span>
      <nav>
        <ul>{items}</ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
