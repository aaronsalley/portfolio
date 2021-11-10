import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import Image from "next/image";
import style from "./index.module.scss";

import { ReactComponent as BHPhotoLogo } from "@svgr/webpack?!url-loader?modules!./assets/Aaron-Salley-Disruptv-NYC-bhphoto-logo.svg";
import { ReactComponent as MTFLogo } from "@svgr/webpack?!url-loader?modules!./assets/Aaron-Salley-Disruptv-NYC-mtf-logo.svg";
import { ReactComponent as BNYMellonLogo } from "@svgr/webpack?!url-loader?modules!./assets/Aaron-Salley-Disruptv-NYC-bnymellon-logo.svg";
import { ReactComponent as RMCompassLogo } from "@svgr/webpack?!url-loader?modules!./assets/Aaron-Salley-Disruptv-NYC-rm+compass-logo.svg";
import { ReactComponent as IntryLogo } from "@svgr/webpack?!url-loader?modules!./assets/Aaron-Salley-Disruptv-NYC-intry-logo.svg";

const FeaturedClients = ({
  clients = useAppSelector((state: RootState) => state.featuredClients),
  files = require.context("./assets", false, /\.(svg)$/),
}) => {
  const [logos, setLogos]: [any, Dispatch<SetStateAction<undefined>>] =
    useState();
  useEffect(() => {
    let images: any = {};

    files.keys().map((image: any) => {
      const match = /(.\/Aaron-Salley-Disruptv-NYC-|-logo.svg)/g;
      images[image.replace(match, "")] = files(image).default;
    });

    setLogos(images);
  }, []);

  // TODO: Handle auto import of SVG files from assets directory
  const items = clients.map((client: any) => {
    return (
      <li key={client}>
        {logos && logos[client] ? <Image src={logos[client]} /> : null}
      </li>
    );
  });

  return (
    <ul className={style["container"]}>
      <li>
        <BHPhotoLogo />
      </li>
      <li>
        <MTFLogo />
      </li>
      <li>
        <BNYMellonLogo />
      </li>
      <li>
        <RMCompassLogo />
      </li>
      <li>
        <IntryLogo />
      </li>
    </ul>
  );
};

export default FeaturedClients;
