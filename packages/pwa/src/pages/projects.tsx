import type { NextPage } from "next";
import Head from "next/head";
import { RootState, useAppSelector } from "../../data/viewModel/store";
import Showcase from "../components/templates/Showcase";

const Page: NextPage = ({
  siteTitle = useAppSelector((state: RootState) => state.siteTitle),
}: React.ComponentProps<any>): React.ReactElement => {
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
