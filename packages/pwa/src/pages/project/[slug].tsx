import type { NextPage } from "next";
import { getProject } from "../../../data/controllers/actions";
import { RootState, useAppSelector } from "../../../data/viewModel/store";
import CaseContent from "../../components/templates/CaseContent";
import CaseFooter from "../../components/templates/CaseFooter";
import CaseHeader from "../../components/templates/CaseHeader";
import CaseSidebar from "../../components/templates/CaseSidebar";

const Page: NextPage = ({
  project = useAppSelector((state: RootState) => getProject(state)),
}: React.ComponentProps<any>): React.ReactElement => (
  <article>
    {project ? <CaseHeader {...project} /> : null}
    <main>
      {project ? <CaseSidebar outline={project.content} /> : null}
      {project ? <CaseContent content={project.content} /> : null}
    </main>
    <CaseFooter></CaseFooter>
  </article>
);

export default Page;
