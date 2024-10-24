export interface DropdownOption {
  label: string; // Display label for the option
  value: string; // Value for the option
}

export interface DropdownProps {
  options: DropdownOption[]; // Array of dropdown options
  disabled?: boolean; // Optional disabled prop
}
