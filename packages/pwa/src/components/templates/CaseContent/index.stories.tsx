import { ComponentStory, ComponentMeta } from "@storybook/react";

import CaseContent from ".";

export default {
  title: "Design System/Templates/Case Study",
  component: CaseContent,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <CaseContent></CaseContent>;
export const Content = Template.bind({});
