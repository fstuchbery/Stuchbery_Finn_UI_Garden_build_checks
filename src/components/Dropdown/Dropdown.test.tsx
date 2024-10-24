// src/components/Text/Text.tests.tsx
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dropdown from "./Dropdown";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];
// are the options visible?
test("Dropdown renders with correct options", () => {
  const { getByText } = render(<Dropdown options={options} />);

  options.forEach((option) => {
    expect(getByText(option.label)).toBeVisible();
  });
});

// this checks to see if the dropdown has the stlyes of a disabled table
test("Dropdown shows disabled state", () => {
  const { container } = render(<Dropdown options={options} disabled />);

  // Check if the dropdown has the correct styles
  expect(container.firstChild).toHaveStyle("background: lightgray");
  expect(container.firstChild).toHaveStyle("pointer-events: none");
  expect(container.firstChild).toHaveStyle("opacity: 0.6"); // Check for visual feedback
});
