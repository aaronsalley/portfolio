import { ComponentStory, ComponentMeta } from "@storybook/react";

import CaseSidebar from ".";

export default {
  title: "Design System/Organisms/Case Study",
  component: CaseSidebar,
} as ComponentMeta<any>;

const SidebarTemplate: ComponentStory<any> = (args) => (
  <CaseSidebar></CaseSidebar>
);
export const Sidebar = SidebarTemplate.bind({});
