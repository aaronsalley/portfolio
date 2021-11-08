import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import style from "./index.module.scss";

const SiteFooter = ({
  links = useAppSelector((state: RootState) => state.menus.social),
}: React.ComponentProps<any>): React.ReactElement => {
  let items = null;
  const year = new Date().getFullYear();

  if (links) {
    items = links.map((link: any, i: number) => {
      return (
        <li key={i}>
          <a href={link.href} target="_blank">
            <i className={"fab fa-" + link.title.toLowerCase()}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer className={style.container}>
      <menu>
        <ul>{items}</ul>
      </menu>
      <span></span>
      <p className={style.copyright}>
        © Copyright {year}. All rights reserved.
      </p>
    </footer>
  );
};

export default SiteFooter;
