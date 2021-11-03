import { ComponentStory, ComponentMeta } from "@storybook/react";

import PlatformList from ".";

export default {
  title: "Design System/Molecules/Menu",
  component: PlatformList,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <PlatformList {...args} />;

export const Platforms = Template.bind({});
Platforms.args = {};
