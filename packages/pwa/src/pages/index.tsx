import React from "react";
import type { NextPage } from "next";
import Intro from "../components/organisms/Intro";
import Showcase from "../components/templates/Showcase";
import { RootState, useAppSelector } from "../../data/viewModel/store";

const Page: NextPage = (): React.ReactElement => {
  const page = useAppSelector((state: RootState) => state.pages[0]);

  return (
    <React.Fragment>
      <Intro includeFeatured {...page} />
      <Showcase max={3} />
    </React.Fragment>
  );
};

export default Page;
