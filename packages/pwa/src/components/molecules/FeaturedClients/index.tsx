import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import Image from "next/image";
import style from "./index.module.scss";

import { ReactComponent as BHPhotoLogo } from "@svgr/webpack?!url-loader?modules!./assets/bhphoto.svg";
import { ReactComponent as MTFLogo } from "@svgr/webpack?!url-loader?modules!./assets/mtf.svg";
import { ReactComponent as BNYMellonLogo } from "@svgr/webpack?!url-loader?modules!./assets/bnymellon.svg";
import { ReactComponent as RMCompassLogo } from "@svgr/webpack?!url-loader?modules!./assets/rm+compass.svg";
import { ReactComponent as IntryLogo } from "@svgr/webpack?!url-loader?modules!./assets/intry.svg";
import { ReactComponent as MSKLogo } from "@svgr/webpack?!url-loader?modules!./assets/mskcc.svg";

const FeaturedClients = (): React.ReactElement => {
  // TODO: Handle auto import of SVG files from assets directory
  // const clients = useAppSelector((state: RootState) => state.featuredClients);
  // const files = require.context("./assets", false, /\.(svg)$/);

  // const [logos, setLogos]: [any, Dispatch<SetStateAction<any>>] = useState();
  // useEffect(() => {
  //   let images: any = {};

  //   files.keys().map((image: any) => {
  //     const match = /.\/([\w\+]+).svg/g;
  //     console.log(files(image));
  //     images[image.replace(match, "$1")] = files(image).default;
  //   });

  //   setLogos(images);
  // }, [files]);
  // console.log(logos);

  // const items = clients.map((client: any) => {
  //   try {
  //     console.log(client);

  //     const svg = atob(
  //       logos[client].replace(/data:image\/svg\+xml;base64,/, "")
  //     );

  //     return <li key={client} dangerouslySetInnerHTML={{ __html: svg }} />;
  //   } catch (error) {
  //     return null;
  //   }
  // });

  return (
    <ul className={style["container"]}>
      {/* {items} */}
      <li>
        <MSKLogo />
      </li>
      <li>
        <BHPhotoLogo />
      </li>
      <li>
        <MTFLogo />
      </li>
      <li>
        <RMCompassLogo />
      </li>
      <li>
        <IntryLogo />
      </li>
      <li>
        <BNYMellonLogo />
      </li>
    </ul>
  );
};

export default FeaturedClients;
