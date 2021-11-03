import { ComponentStory, ComponentMeta } from "@storybook/react";

import HardwareMenu from ".";

export default {
  title: "Design System/Molecules/Menu",
  component: HardwareMenu,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <HardwareMenu {...args} />;

export const Hardware = Template.bind({});
Hardware.args = {};
