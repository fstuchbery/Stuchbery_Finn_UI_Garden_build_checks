export interface TableProps {
  columns: string[]; // Array of column headers
  data: string[][]; // Array of rows, where each row is an array of strings
  disabled: boolean;
}
