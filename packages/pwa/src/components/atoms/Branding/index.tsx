import Link from "next/link";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../../../utils";

const Branding = ({
  siteTitle = useAppSelector((state: RootState) => state.siteTitle),
  branding = useAppSelector((state: RootState) => state.branding),
  colorScheme = useAppSelector((state: RootState) => state.colorScheme),
}) => {
  const [logo, setLogo] = useState();
  useEffect(() => {
    (async () => {
      let image = await import(
        `./assets/${branding}--on${capitalizeFirstLetter(colorScheme)}.svg`
      );
      setLogo(image.default);
    })();
  }, [colorScheme]);

  return (
    <Link href={"/"}>
      <a>{logo ? <Image src={logo} height={56} alt={siteTitle} /> : null}</a>
    </Link>
  );
};

export default Branding;
