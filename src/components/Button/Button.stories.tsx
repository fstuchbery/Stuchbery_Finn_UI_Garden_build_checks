import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
// for the stories files, i followed the template that is in the
// tutorial

export default {
  title: "Finns react Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  label: "This is the default button! and im changing changed it again and again ",
};

// Disabled button state
export const Disabled = Template.bind({});
Disabled.args = {
  label: "This is the Disabled button",
  disabled: true,
};
