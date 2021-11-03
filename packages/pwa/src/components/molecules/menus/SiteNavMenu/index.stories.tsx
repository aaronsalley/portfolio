import { ComponentStory, ComponentMeta } from "@storybook/react";

import SiteNav from ".";

export default {
  title: "Design System/Molecules/Menu",
  component: SiteNav,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <SiteNav {...args} />;

export const SiteNavigation = Template.bind({});
SiteNavigation.args = {};
