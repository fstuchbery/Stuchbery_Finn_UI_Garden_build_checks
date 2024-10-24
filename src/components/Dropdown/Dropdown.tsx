import React from "react";
import styled, { css } from "styled-components";
import { DropdownProps } from "./Dropdown.types"; // Import ButtonProps

// Create a styled dropdown component
// this below changes the css styles stuff depending whether or not
// the dropdown is of a disabled property or not
const StyledSelect = styled.select<{ disabled?: boolean }>`
  background: transparent;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0.5em 1em;
  cursor: pointer;
  width: 100%; /* Make it responsive */

  ${(props) =>
    props.disabled &&
    css`
      background: lightgray;
      color: darkgray;
      opacity: 0.6;
      cursor: not-allowed; /* Change cursor for disabled state */
      pointer-events: none; /* Prevent interactions when disabled */
    `}
`;

// below is where the actual dropdown is made and ready to exported
const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false }) => {
  return (
    <StyledSelect disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
// finally export the dropdown
export default Dropdown;
