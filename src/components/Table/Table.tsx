import React from "react";
import styled, { css } from 'styled-components';
import { TableProps } from './Table.types'; // Import ButtonProps


// Create a styled button component
const StyledTable = styled.table<{ disabled?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; /* Change opacity when disabled */
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; /* Prevent interactions when disabled */
`;

const StyledTh = styled.th`
  padding: 12px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const Table: React.FC<TableProps> = ({ columns, data, disabled = false }) => {
  return (
    <StyledTable disabled={disabled}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <StyledTh key={index}>{column}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledTd key={cellIndex}>{cell}</StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
