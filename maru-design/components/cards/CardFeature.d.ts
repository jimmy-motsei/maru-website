import * as React from "react";

/** White feature tile: cyan icon chip + title + body. Default for benefit grids. */
export interface CardFeatureProps {
  /** Icon node (e.g. an inline SVG) rendered in the cyan chip. */
  icon?: React.ReactNode;
  title: string;
  body: string;
  style?: React.CSSProperties;
}

export function CardFeature(props: CardFeatureProps): JSX.Element;
