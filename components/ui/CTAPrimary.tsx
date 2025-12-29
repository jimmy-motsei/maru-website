import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CTAPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const CTAPrimary: React.FC<CTAPrimaryProps> = ({
  children,
  onClick,
  href,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel
}) => {
  const baseStyles = cn(
    "inline-flex items-center justify-between",
    "bg-[#3DD6D0] text-black",
    "font-bold uppercase text-sm tracking-[0.5px]",
    "px-8 py-4 rounded-[50px]",
    "gap-4 min-h-[56px]",
    "transition-all duration-300 ease-in-out",
    "hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(61,214,208,0.5)]",
    "active:translate-y-0 active:shadow-[0_2px_8px_rgba(61,214,208,0.3)]",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#3DD6D0] focus-visible:outline-offset-3",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0",
    "w-full sm:w-auto", // Mobile full-width, desktop auto
    className
  );

  const arrowCircleStyles = cn(
    "w-10 h-10 bg-black rounded-full",
    "flex items-center justify-center flex-shrink-0",
    "transition-transform duration-300 group-hover:translate-x-0.5"
  );

  const content = (
    <>
      <span>{children}</span>
      <span className={arrowCircleStyles}>
        <ArrowRight className="w-5 h-5 text-white" />
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={cn(baseStyles, "group")} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, "group")}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
