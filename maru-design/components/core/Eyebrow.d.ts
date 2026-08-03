import * as React from "react";

/** Small uppercase kicker label above a headline. */
export interface EyebrowProps {
  children: React.ReactNode;
  /** `cyan` = interactive register (default), `gold` = credential register. */
  tone?: "cyan" | "gold";
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
