import { ComponentStory, ComponentMeta } from "@storybook/react";

import CaseHeader from ".";

export default {
  title: "Design System/Organisms/Case Study",
  component: CaseHeader,
} as ComponentMeta<any>;

const HeaderTemplate: ComponentStory<any> = (args) => <CaseHeader></CaseHeader>;
export const Header = HeaderTemplate.bind({});
