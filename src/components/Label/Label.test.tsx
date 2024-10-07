import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Label from "./Label";

test('renders button with label', () => {
  render(<Label label="Test Label" />);
  const buttonElement = screen.getByText(/Test Label/i);
  expect(buttonElement).toBeInTheDocument(); // Check that the button is visible
});

test('disabled button has correct background color', () => {
  const { container } = render(<Label label="Disabled Label" disabled={true} />);
  const buttonElement = screen.getByText(/Disabled Label/i);
  // Check the computed style of the button
  expect(buttonElement).toHaveStyle('background: lightgray'); // Adjust to your actual disabled background color
});