import React from 'react';
import Button from '@/components/ui/Button';

/**
 * @deprecated Use `Button` with `variant="primary"` directly.
 *
 * CTAPrimary is retained only as a thin compatibility wrapper for legacy call
 * sites. It now renders the canonical `Button` primary so the whole site uses
 * one CTA system.
 */
interface CTAPrimaryProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export const CTAPrimary: React.FC<CTAPrimaryProps> = ({
  children,
  onClick,
  href,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
  target,
  rel,
}) => {
  return (
    <Button
      variant="primary"
      href={href}
      onClick={onClick ? () => onClick() : undefined}
      disabled={disabled}
      className={className}
      type={type}
      ariaLabel={ariaLabel}
      target={target}
      rel={rel}
    >
      {children}
    </Button>
  );
};

export default CTAPrimary;
