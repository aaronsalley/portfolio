import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import Image from "next/image";
import style from "./index.module.scss";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

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

  const items = clients.map((client: any) => {
    return (
      <li key={client}>
        {logos && logos[client] ? <Image src={logos[client]} /> : null}
      </li>
    );
  });

  return <ul className={style["container"]}>{items}</ul>;
};

export default FeaturedClients;
