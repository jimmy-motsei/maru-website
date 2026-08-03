import * as React from "react";

/** Dark navy panel, cyan left-rail + title. For emphasis statements on light pages. */
export interface CardNavyProps {
  label?: string;
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function CardNavy(props: CardNavyProps): JSX.Element;
