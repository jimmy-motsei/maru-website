import * as React from "react";

/** Labelled multi-line text field. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea(props: TextareaProps): JSX.Element;
