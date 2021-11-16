import { ComponentStory, ComponentMeta } from "@storybook/react";

import SiteHeaderView from ".";

export default {
  title: "Design System/Organisms",
  component: SiteHeaderView,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => (
  <SiteHeaderView></SiteHeaderView>
);

export const SiteHeader = Template.bind({});
