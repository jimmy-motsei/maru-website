import * as React from "react";

/** Gold-tint credential panel. Reserve for proof / results / trust statements. */
export interface CardGoldProps {
  label?: string;
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function CardGold(props: CardGoldProps): JSX.Element;
