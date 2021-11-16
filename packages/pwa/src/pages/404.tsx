import type { NextPage } from "next";
import Head from "next/head";
import { RootState, useAppSelector } from "../../data/viewModel/store";

const Page: NextPage = (): React.ReactElement => {
  const siteTitle = useAppSelector((state: RootState) => state.siteTitle);

  return (
    <main
      style={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Page not found - {siteTitle}</title>
      </Head>
      <h2
        style={{
          display: "inline-block",
          borderRight: "1px solid rgba(0, 0, 0,.3)",
          margin: 0,
          marginRight: "20px",
          padding: "10px 23px 10px 0",
          fontWeight: "bold",
          verticalAlign: "top",
          color: "var(--text)",
        }}
      >
        404
      </h2>
      <h3
        style={{
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "inherit",
          margin: 0,
          padding: 0,
          color: "var(--text)",
        }}
      >
        This page could not be found.
      </h3>
    </main>
  );
};

export default Page;
