import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("renders button with label", () => {
  render(<Button label="Test Button" />);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument(); // Check that the button is visible
});

test("disabled button has correct background color", () => {
  const { container } = render(
    <Button label="Disabled Button" disabled={true} />,
  );
  const buttonElement = screen.getByText(/Disabled Button/i);
  // Check the computed style of the button
  expect(buttonElement).toHaveStyle("background: lightgray"); // Adjust to your actual disabled background color
});
