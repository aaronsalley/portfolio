import type { NextPage } from "next";
import { useRouter } from "next/router";
import { RootState, useAppSelector } from "../../../data/data/store";
import CaseContent from "../../components/templates/CaseContent";
import CaseFooter from "../../components/templates/CaseFooter";
import CaseHeader from "../../components/templates/CaseHeader";
import CaseSidebar from "../../components/templates/CaseSidebar";

const getProject = (state: RootState) => {
  const router = useRouter();
  const { slug } = router.query;
  return state.projects[0];
};

const Page: NextPage = ({
  project = useAppSelector((state) => getProject(state)),
}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <article>
      <CaseHeader {...project}></CaseHeader>
      <main>
        <CaseSidebar outline={project.content}></CaseSidebar>
        <CaseContent content={project.content}></CaseContent>
      </main>
      <CaseFooter></CaseFooter>
    </article>
  );
};

export default Page;
