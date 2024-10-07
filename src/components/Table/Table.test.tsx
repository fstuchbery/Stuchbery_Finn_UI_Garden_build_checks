// src/components/Text/Text.tests.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Table from './Table';

const columns = ['Name', 'Age', 'City'];
const data = [
  ['Alice', '30', 'New York'],
  ['Bob', '25', 'San Francisco'],
];

test('Table renders with correct number of columns and rows', () => {
  const { getByText } = render(<Table columns={columns} data={data} disabled={false} />);
  
  // Check for column headers
  columns.forEach(column => {
    expect(getByText(column)).toBeVisible();
  });

  // Check for row data
  data.forEach(row => {
    row.forEach(cell => {
      expect(getByText(cell)).toBeVisible();
    });
  });
});

// New test for disabled state
test('Table shows disabled state', () => {
  const { container } = render(<Table columns={columns} data={data} disabled={true} />);
  
  // Check if the table has reduced opacity
  expect(container.firstChild).toHaveStyle('opacity: 0.6');
  
  // Check if pointer-events is none
  expect(container.firstChild).toHaveStyle('pointer-events: none');
  
  // Check if the table is visually disabled (light gray background)
  expect(container.firstChild).toHaveStyle('background: transparent');
});

