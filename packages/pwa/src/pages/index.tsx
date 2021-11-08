import React from "react";
import type { NextPage } from "next";
import { RootState, useAppSelector } from "../../data/viewModel/store";
import Showcase from "../components/templates/Showcase";
import FeaturedClients from "../components/molecules/FeaturedClients";

const Page: NextPage = ({
  page = useAppSelector((state: RootState) => state.pages[0]),
}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <React.Fragment>
      {page.content}
      <FeaturedClients />
      <Showcase max={3} />
    </React.Fragment>
  );
};

export default Page;
