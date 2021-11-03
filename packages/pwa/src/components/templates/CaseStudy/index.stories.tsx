import { ComponentStory, ComponentMeta } from "@storybook/react";

import Case from ".";

export default {
  title: "Design System/Templates/Case Study",
  component: Case,
} as ComponentMeta<any>;

const CaseTemplate: ComponentStory<any> = (args) => <Case></Case>;
export const CaseStudy = CaseTemplate.bind({});
