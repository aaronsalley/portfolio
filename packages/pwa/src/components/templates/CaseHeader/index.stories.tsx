import { ComponentStory, ComponentMeta } from "@storybook/react";

import CaseHeader from ".";
import type { Project } from "../../../../data/models/Project";

export default {
  title: "Design System/Templates/Case Study",
  component: CaseHeader,
} as ComponentMeta<any>;

const project: Project = {
  slug: "",
  title: "Project Title",
  client: "",
  summary: "",
  content: null,
  date: "",
  roles: [],
  platforms: {
    android: true,
    mac: true,
    web: true,
  },
  tools: [],
  meta: {
    title: "",
    og: "",
    twitter: "",
  },
};

const HeaderTemplate: ComponentStory<any> = (args) => (
  <CaseHeader {...{ project }}></CaseHeader>
);
export const Header = HeaderTemplate.bind({});
