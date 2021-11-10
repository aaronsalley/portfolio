import React from "react";
import Image, { ImageProps } from "next/image";
import { Project } from "../../../../data/models/Project";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import ProjectHeader from "../../../components/organisms/ProjectHeader";
import Button from "../../atoms/Button";

import style from "./index.module.scss";

const Showcase = ({
  projects = useAppSelector((state: RootState) => state.projects),
  max = projects.length,
}: React.ComponentProps<any>): React.ReactElement => {
  /**
   * Conditionally display the featured image
   * for the project.
   *
   * @returns React.ReactElement or null
   */
  const FeaturedImage = ({
    theme = useAppSelector((state) => state.colorScheme),
    ...project
  }: React.ComponentProps<any>): React.ReactElement | null => {
    try {
      const image: ImageProps = project.images[theme][project.device];

      if (image) {
        return (
          // FIXME: Images are appearing distorted.
          <Image {...image} alt={`${project.client} project on a device`} />
        );
      }
    } catch (error) {
      // console.log(error);
    }

    return null;
  };

  /**
   * Creates the case study items.
   */
  const Items = (): any => {
    let items = [];
    for (let i = 0; i < max; i++) {
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
