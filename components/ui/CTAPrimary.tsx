import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    "group relative inline-flex items-center justify-between",
    "bg-[#3DD6D0] text-black",
    "font-bold uppercase text-xs sm:text-sm md:text-base tracking-[0.5px]",
    "pl-6 sm:pl-8 pr-2 py-2 rounded-full",
    "min-h-[52px] sm:min-h-[56px]",
    "whitespace-nowrap cursor-pointer",
    "transition-all duration-300 ease-in-out",
    "hover:bg-[#35C4BE] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(61,214,208,0.5)]",
    "active:translate-y-0 active:shadow-[0_2px_8px_rgba(61,214,208,0.3)]",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#3DD6D0] focus-visible:outline-offset-3",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0",
    "w-full sm:w-auto",
    className
  );

  const content = (
    <>
      <span className="flex-1 text-center mr-4">{children}</span>
      <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
    </>
  );

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
