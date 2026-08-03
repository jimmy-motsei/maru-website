import * as React from "react";

/** Small status / category pill. */
export interface BadgeProps {
  children: React.ReactNode;
  /** `cyan` (default), `gold` for credentials, `navy`, or `whatsapp`. */
  tone?: "cyan" | "gold" | "navy" | "whatsapp";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
