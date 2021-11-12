import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { getPage } from "../../data/controllers/actions";
import { RootState, useAppSelector } from "../../data/viewModel/store";
import Intro from "../components/organisms/Intro";

const Page: NextPage = (): React.ReactElement => {
  const page = useAppSelector((state: RootState) => getPage(state));
  const siteTitle = useAppSelector((state: RootState) => state.siteTitle);

  return (
    <React.Fragment>
      <Head>
        <title>
          {page.title} - {siteTitle}
        </title>
      </Head>
      <Intro includeFeatured {...page} />
    </React.Fragment>
  );
};

export default Page;
