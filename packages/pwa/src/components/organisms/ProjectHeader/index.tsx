import type { Project } from "../../../../data/models/Project";

/**
 * Creates the headline and teaser
 * for a project.
 *
 * @returns React.ReactElement
 */
const ProjectHeader = (project: Project): React.ReactElement => (
  <header>
    <h1>
      <small>{project.title}</small>
      {project.client}
    </h1>
    <p>{project.summary}</p>
  </header>
);

export default ProjectHeader;
