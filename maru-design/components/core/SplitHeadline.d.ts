import * as React from "react";

/**
 * Maru's signature two-weight display headline.
 *
 * @startingPoint section="Core" subtitle="Light + strong split display headline" viewport="700x200"
 */
export interface SplitHeadlineProps {
  /** The light-weight (100) leading phrase. */
  leadingText: string;
  /** The strong-weight (500) emphasis phrase. */
  emphasisText: string;
  as?: "h1" | "h2" | "h3";
  /** Break onto a second line before the emphasis (default true). */
  breakBeforeEmphasis?: boolean;
  /** Colour of the emphasis run. */
  emphasisTone?: "navy" | "cyan" | "gold" | "inverted";
  style?: React.CSSProperties;
}

export function SplitHeadline(props: SplitHeadlineProps): JSX.Element;
