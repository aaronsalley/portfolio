import { ComponentStory, ComponentMeta } from "@storybook/react";

import CaseFooter from ".";

export default {
  title: "Design System/Organisms/Case Study",
  component: CaseFooter,
} as ComponentMeta<any>;

const FooterTemplate: ComponentStory<any> = (args) => <CaseFooter></CaseFooter>;
export const Footer = FooterTemplate.bind({});
