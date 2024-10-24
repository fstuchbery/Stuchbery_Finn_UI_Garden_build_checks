import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types"; // Import ButtonProps

// Create a styled button component
const StyledButton = styled.button<{}>`
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

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton disabled={props.disabled}>{props.label}</StyledButton>;
};

export default Button;
