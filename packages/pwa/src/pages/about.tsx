import React from "react";
import type { NextPage } from "next";
import { RootState, useAppSelector } from "../../data/viewModel/store";
import Intro from "../components/organisms/Intro";

const Page: NextPage = ({
  // TODO: query pages for title = About
  page = useAppSelector((state: RootState) => state.pages[2]),
}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <React.Fragment>
      <Intro includeFeatured {...page} />
    </React.Fragment>
  );
};

export default Page;
