import type { NextPage } from "next";
import Intro from "../components/organisms/Intro";
import Showcase from "../components/templates/Showcase";
import { RootState, useAppSelector } from "../../data/viewModel/store";
import { getPage } from "../../data/controllers/actions";

const Page: NextPage = (): React.ReactElement => {
  const page = useAppSelector((state: RootState) => getPage(state));

  return (
    <>
      <Intro includeFeatured {...page} />
      <Showcase max={3} />
    </>
  );
};

export default Page;
