import React  from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
// for the stories files, i followed the template that is in the 
// tutorial
export default {
  title: 'Finns Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  // this is where i set up the options
  // of the dropdown table
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  // this is where i set up the options
  // of the dropdown table
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  disabled: true, // Set disabled to true for this state
};