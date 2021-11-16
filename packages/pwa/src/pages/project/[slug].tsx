import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { RootState, useAppSelector } from "../../../data/viewModel/store";
import CaseHeader from "../../components/templates/CaseHeader";
import CaseSidebar from "../../components/templates/CaseSidebar";
import CaseContent from "../../components/templates/CaseContent";
import CaseFooter from "../../components/templates/CaseFooter";

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: get projects from store
  const projects = [
    "bhphotovideo",
    "davincian",
    "intry",
    "lumifi",
    // "mtfmusicals",
  ];

  const paths = projects.map((project: string) => ({
    params: { slug: project },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await import(`../../../data/viewModel/projects/${params.slug}`);
  const project = res.default;

  if (!project) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      project,
    },
  };
};

const Page: NextPage = ({
  project,
}: React.ComponentProps<any>): React.ReactElement => {
  const siteTitle = useAppSelector((state: RootState) => state.siteTitle);

  return (
    <article>
      <Head>
        <title>
          {project.title}
          {siteTitle}
        </title>
      </Head>
      <CaseHeader {...project} />
      {/* <main>
        <CaseSidebar outline={project.content} />
        <CaseContent content={project.content} />
      </main> */}
      <CaseFooter></CaseFooter>
    </article>
  );
};

export default Page;
