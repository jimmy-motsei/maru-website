import * as React from "react";

/**
 * Single stat card — large Outfit numeral over an uppercase label.
 *
 * @startingPoint section="Cards" subtitle="Stat / metric card row" viewport="700x180"
 */
export interface CardMetricProps {
  /** The headline figure, e.g. "24h", "Free", "R7,500". */
  value: string;
  /** Small uppercase descriptor below the value. */
  label: string;
  style?: React.CSSProperties;
}

export function CardMetric(props: CardMetricProps): JSX.Element;
