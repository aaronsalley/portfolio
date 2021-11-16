import { ComponentStory, ComponentMeta } from "@storybook/react";

import Showcase from ".";

export default {
  title: "Design System/Templates/Case Study",
  component: Showcase,
} as ComponentMeta<any>;

const HeaderTemplate: ComponentStory<any> = (args) => <Showcase></Showcase>;
export const Header = HeaderTemplate.bind({});
