import Image, { ImageProps } from "next/image";
import { Project } from "../../../../data/models/Project";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import ProjectHeader from "../../../components/organisms/ProjectHeader";
import Button from "../../atoms/Button";

import style from "./index.module.scss";
import Link from "next/link";
import { toKeys } from "../../../../data/models/featuredImages";

const Showcase = ({ max }: React.ComponentProps<any>): React.ReactElement => {
  const projects = useAppSelector((state: RootState) => state.projects);

  /**
   * Conditionally display the featured image
   * for the project.
   *
   * @returns React.ReactElement or null
   */
  const FeaturedImage = ({
    ...project
  }: React.ComponentProps<any>): React.ReactElement | null => {
    const theme = useAppSelector((state) => state.colorScheme);

    try {
      const image = toKeys(project.images[theme], project.device);

      if (image) {
        return (
          <Link
            href={{
              pathname: "/project/[slug]",
              query: { slug: project.slug as string },
            }}
          >
            <a>
              <img
                src={image}
                alt={`${project.client} project on a device`}
                // placeholder={"blur"}
                // blurDataURL={`${image}?lqip`}
                // layout={"fill"}
              />
            </a>
          </Link>
        );
      }
    } catch (error) {}

    return null;
  };

  /**
   * Creates the case study items.
   */
  const Items = (): any => {
    let items = [];
    for (let i = 0; i < (max ?? projects.length); i++) {
      const project: Project = projects[i];

      items.push(
        <li key={i}>
          <section>
            <ProjectHeader context={"showcase"} {...project} />
            <Button
              href={{
                pathname: "/project/[slug]",
                query: { slug: project.slug as string },
              }}
              CTA={"View Case Study"}
              title={`Read the full ${project.client} case study`}
            />
          </section>
          <FeaturedImage {...project} />
        </li>
      );
    }

    return items;
  };

  return (
    <ul className={style["container"]}>
      <Items />
    </ul>
  );
};

export default Showcase;
