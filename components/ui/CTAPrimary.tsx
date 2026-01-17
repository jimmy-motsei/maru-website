import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
  rel
}) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center",
    "bg-[#22d3ee] text-black",
    "font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.5px]",
    "px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full",
    "min-h-[52px] sm:min-h-[56px]",
    "whitespace-nowrap",
    "transition-all duration-300 ease-in-out",
    "hover:bg-[#06b6d4] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(34,211,238,0.5)]",
    "active:translate-y-0 active:shadow-[0_2px_8px_rgba(34,211,238,0.3)]",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#22d3ee] focus-visible:outline-offset-3",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0",
    "w-full sm:w-auto",
    className
  );

  const content = <span className="text-center">{children}</span>;

  if (href && !disabled) {
    // Check if external link (starts with http:// or https://)
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={baseStyles} 
          aria-label={ariaLabel}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link href={href} className={baseStyles} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
