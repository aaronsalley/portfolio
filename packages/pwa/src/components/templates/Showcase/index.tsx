import React from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Project } from "../../../../data/models/Project";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import ProjectHeader from "../../../components/organisms/ProjectHeader";

const Showcase = ({
  projects = useAppSelector((state: RootState) => state.projects),
  max, // TODO: implement max return items
}: React.ComponentProps<any>): React.ReactElement => {
  /**
   * Creates the CTA for each case study.
   *
   * @param props
   * @returns React.ReactElement
   */
  const Button = ({
    client,
  }: React.ComponentProps<any>): React.ReactElement => (
    <button title={`Read the full ${client} case study`}>
      View Case Study
    </button>
  );

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
          <Image {...image} alt={`${project.client} project on a device`} />
        );
      }
    } catch (error) {
      // console.log(error);
    }

    return null;
  };

  /**
   * Creates the linked list of case study items.
   */
  const items = projects
    ? projects.map((project: Project, i: number) => {
        return (
          <li key={i}>
            <Link
              href={{
                pathname: "/project/[slug]",
                query: { slug: project.slug as string },
              }}
              passHref
            >
              <a>
                <ProjectHeader {...project} />
                <Button client={project.client} />
                <FeaturedImage {...project} />
              </a>
            </Link>
          </li>
        );
      })
    : null;

  return <ul>{items}</ul>;
};

export default Showcase;
