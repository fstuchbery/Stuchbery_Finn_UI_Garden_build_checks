import React  from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
// for the stories files, i followed the template that is in the 
// tutorial

export default {
  title: 'Finns react text thingy',
  component: Text,
} as Meta<typeof Text>;


const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  children: 'This is the default text!',
};


// Disabled button state
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'This is the Disabled text!',
  disabled: true,
};
