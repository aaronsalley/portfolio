import type { NextPage } from "next";
import Head from "next/head";
import { RootState, useAppSelector } from "../../data/viewModel/store";

const Page: NextPage = (): React.ReactElement => {
  const siteTitle = useAppSelector((state: RootState) => state.siteTitle);

  return (
    <Head>
      <title>Résumé - {siteTitle}</title>
    </Head>
  );
};

export default Page;
