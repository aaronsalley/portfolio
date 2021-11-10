import type { NextPage } from "next";
import Head from "next/head";
import { RootState, useAppSelector } from "../../data/viewModel/store";

const Page: NextPage = ({
  siteTitle = useAppSelector((state: RootState) => state.siteTitle),
}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <Head>
      <title>Résumé - {siteTitle}</title>
    </Head>
  );
};

export default Page;
