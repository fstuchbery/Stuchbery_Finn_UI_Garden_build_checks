import React  from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from './Table';
// for the stories files, i followed the template that is in the 
// tutorial

export default {
  title: 'Finns React Table', // Updated title for Table
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

// the Default state
export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'City'], // Columns for the table
  data: [
    ['Finn', '21', 'Winnipeg'],
    ['Cooper', '21', 'Winnipeg'],
  ], // Sample data for the table
};

//  this is the disabled stat
export const Disabled = Template.bind({});
Disabled.args = {
  columns: ['Name', 'Age', 'City'],
  data: [
    ['Spencer', '25', 'Winnipeg'],
    ['Nick', '59', 'Winnipeg'],
  ],
  disabled: true, // Set disabled to true for this state
};
