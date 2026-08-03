import * as React from "react";

/** Checkbox with label. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
