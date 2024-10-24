export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  disabled?: boolean;
  children: string; // Now specifically expects a string
}
