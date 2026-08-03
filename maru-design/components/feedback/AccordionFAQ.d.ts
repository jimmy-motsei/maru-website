import * as React from "react";

/** Hairline-divided FAQ accordion. Cyan question + rotating + icon. */
export interface AccordionFAQProps {
  /** Questions and answers. */
  items: Array<{ q: string; a: string }>;
  style?: React.CSSProperties;
}

export function AccordionFAQ(props: AccordionFAQProps): JSX.Element;
