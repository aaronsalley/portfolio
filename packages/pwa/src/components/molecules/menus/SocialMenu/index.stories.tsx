import { ComponentStory, ComponentMeta } from "@storybook/react";

import SocialMenu from ".";

export default {
  title: "Design System/Molecules/Menu",
  component: SocialMenu,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <SocialMenu {...args} />;

export const SocialMedia = Template.bind({});
SocialMedia.args = {};
