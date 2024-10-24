// src/components/Text/Text.tests.tsx
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Text from "./Text";

test("Text component is visible", () => {
  const { getByText } = render(<Text>This is visible text</Text>);
  expect(getByText("This is visible text")).toBeVisible();
});

test("Text component changes color when disabled", () => {
  const { getByText } = render(<Text disabled>This is disabled text</Text>);
  const textElement = getByText("This is disabled text");
  expect(textElement).toHaveStyle("color: darkgray"); // Adjust to match the actual style
});
