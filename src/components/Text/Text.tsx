import React from "react";
import styled, { css } from 'styled-components';
import { TextProps } from './Text.types'; // Import ButtonProps


// Create a styled button component
const StyledText = styled.p<{ disabled?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  width: 10%;
  padding: 0.25em 1em;


  ${props => props.disabled && css`
    background: lightgray;
    color: darkgray;
    cursor: not-allowed; /* Change cursor for disabled state */
  `}
`;

const Text: React.FC<TextProps> = ({ children, disabled = false, ...props }) => {
  return (
    <StyledText disabled={disabled} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
