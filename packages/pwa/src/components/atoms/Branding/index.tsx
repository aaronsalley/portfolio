import Link from "next/link";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../../../utils";

const Branding = (): React.ReactElement => {
  const siteTitle = useAppSelector((state: RootState) => state.siteTitle);
  const branding = useAppSelector((state: RootState) => state.branding);
  const colorScheme = useAppSelector((state: RootState) => state.colorScheme);

  const [logo, setLogo] = useState();
  useEffect(() => {
    (async () => {
      let image = await import(
        `./assets/${branding}--on${capitalizeFirstLetter(colorScheme)}.svg`
      );

      setLogo(image.default);
    })();
  }, [colorScheme, branding]);

  return (
    <Link href={"/"}>
      <a>
        {logo ? (
          <Image
            src={logo}
            width={78}
            height={56}
            alt={siteTitle}
            loading={"eager"}
          />
        ) : null}
      </a>
    </Link>
  );
};

export default Branding;
