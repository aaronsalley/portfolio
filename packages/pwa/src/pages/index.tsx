import React from "react";
import type { NextPage } from "next";
import Intro from "../components/organisms/Intro";
import Showcase from "../components/templates/Showcase";
import { RootState, useAppSelector } from "../../data/viewModel/store";

const Page: NextPage = ({
  page = useAppSelector((state: RootState) => state.pages[0]),
}: React.ComponentProps<any>): React.ReactElement => (
  <React.Fragment>
    <Intro includeFeatured {...page} />
    <Showcase max={3} />
  </React.Fragment>
);

export default Page;
