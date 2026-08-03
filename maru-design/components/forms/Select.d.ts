import * as React from "react";

/** Labelled dropdown with custom chevron. Pass `options` or `<option>` children. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Convenience: array of strings or `{ value, label }`. */
  options?: Array<string | { value: string; label: string }>;
}

export function Select(props: SelectProps): JSX.Element;
