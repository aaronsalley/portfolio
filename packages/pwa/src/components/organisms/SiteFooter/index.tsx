import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import style from "./index.module.scss";

const SiteFooter = (): React.ReactElement => {
  const links = useAppSelector((state: RootState) => state.menus.social);
  const year = new Date().getFullYear();

  let items = null;

  if (links) {
    items = links.map((link: any, i: number) => {
      return (
        <li key={i}>
          <a href={link.href} target={"_blank"} rel={"noopener noreferrer"}>
            <i className={"fab fa-" + link.title.toLowerCase()} aria-hidden />
          </a>
        </li>
      );
    });
  }

  return (
    <footer className={style["container"]}>
      <menu>
        <ul>{items}</ul>
      </menu>
      <span></span>
      <p className={style["copyright"]}>
        © Copyright {year}. All rights reserved.
      </p>
    </footer>
  );
};

export default SiteFooter;
