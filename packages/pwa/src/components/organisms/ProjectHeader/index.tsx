import style from "./index.module.scss";

/**
 * Creates the headline and teaser
 * for a project.
 *
 * @returns React.ReactElement
 */
const ProjectHeader = ({
  context,
  ...project
}: React.ComponentProps<any>): React.ReactElement => (
  <header className={`${style["container"]} ${style[context]}`}>
    <h1>{project.title}</h1>
    <h2>{project.client}</h2>
    <p>{project.summary}</p>
  </header>
);

export default ProjectHeader;
