import * as React from "react";

/** Navy service tile with title, description, and a cyan circular-arrow link. */
export interface ServiceCardProps {
  title: React.ReactNode;
  description: string;
  href?: string;
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
