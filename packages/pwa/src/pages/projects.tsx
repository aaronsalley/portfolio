import type { NextPage } from "next";
import Head from "next/head";
import { RootState, useAppSelector } from "../../data/viewModel/store";
import Showcase from "../components/templates/Showcase";

const Page: NextPage = (): React.ReactElement => {
  const siteTitle = useAppSelector((state: RootState) => state.siteTitle);

  return (
    <main>
      <Head>
        <title>Projects - {siteTitle}</title>
      </Head>
      <Showcase />
    </main>
  );
};

export default Page;
