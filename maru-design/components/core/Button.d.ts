import * as React from "react";

/**
 * Maru's primary action button.
 *
 * @startingPoint section="Core" subtitle="Cyan primary / outline / text-link button with full states" viewport="700x180"
 */
export interface ButtonProps {
  /** Visual register. `primary` = cyan fill, `secondary` = cyan outline, `tertiary` = inline text link with arrow. */
  variant?: "primary" | "secondary" | "tertiary";
  /** Tap-target size. `md` is the default 44px target. */
  size?: "sm" | "md" | "lg";
  /** Renders as an anchor when set. */
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
