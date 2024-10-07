import React  from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';


export default {
  title: 'Finns react Label',
  component: Label,
} as Meta<typeof Label>;


const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  label: 'This is the default label!',
};


// Disabled button state
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'This is the Disabled label',
  disabled: true,
};
