import Link from "next/link";
import { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import { capitalizeFirstLetter } from "../../../../utils";
import Branding from "../../atoms/Branding";
import style from "./index.module.scss";

const SiteHeader = (): React.ReactElement => {
  const { pages, siteTitle, branding, colorScheme } = useAppSelector(
    (state: RootState) => state
  );

  const [logo, setLogo] = useState();
  useEffect(() => {
    (async () => {
      let image = await import(
        `../../../../public/media/${branding}--on${capitalizeFirstLetter(
          colorScheme
        )}.svg`
      );

      setLogo(image.default);
    })();
  }, [colorScheme, branding]);

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
        <Branding logo={logo} title={siteTitle} />
      </span>
      <nav>
        <ul>{items}</ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
