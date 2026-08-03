import * as React from "react";

/** Labelled text input with cyan focus ring and error state. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
}

export function Input(props: InputProps): JSX.Element;
