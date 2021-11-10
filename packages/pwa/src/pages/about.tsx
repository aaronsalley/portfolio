import type { NextPage } from "next";
import { getPage } from "../../data/controllers/actions";
import { RootState, useAppSelector } from "../../data/viewModel/store";
import Intro from "../components/organisms/Intro";

const Page: NextPage = ({
  page = useAppSelector((state: RootState) => getPage(state)),
}: React.ComponentProps<any>): React.ReactElement => {
  return <Intro includeFeatured {...page} />;
};

export default Page;
