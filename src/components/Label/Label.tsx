import React from "react";
import styled, { css } from "styled-components";
import { LabelProps } from "./Label.types"; // Import ButtonProps

// Create a styled button component
const StyledLabel = styled.button<{}>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.disabled &&
    css`
      background: lightgray;
      color: darkgray;
      cursor: not-allowed; /* Change cursor for disabled state */
    `}
`;

const Label: React.FC<LabelProps> = (props) => {
  return <StyledLabel disabled={props.disabled}>{props.label}</StyledLabel>;
};

export default Label;
