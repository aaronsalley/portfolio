import { ComponentStory, ComponentMeta } from "@storybook/react";

import SiteFooterView from ".";

export default {
  title: "Design System/Organisms",
  component: SiteFooterView,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => (
  <SiteFooterView></SiteFooterView>
);

export const SiteFooter = Template.bind({});
