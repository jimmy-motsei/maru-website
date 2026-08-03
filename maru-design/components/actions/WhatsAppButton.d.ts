import * as React from "react";

/**
 * Persistent WhatsApp CTA — pulsing floating action button or inline pill.
 *
 * @startingPoint section="Actions" subtitle="Persistent WhatsApp call-to-action" viewport="700x160"
 */
export interface WhatsAppButtonProps {
  /** Phone number, digits only with country code (default Maru's line). */
  phone?: string;
  /** Optional prefilled message. */
  message?: string;
  /** `fab` = fixed pulsing circle, `inline` = pill in flow. */
  variant?: "fab" | "inline";
  label?: string;
  style?: React.CSSProperties;
}

export function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
