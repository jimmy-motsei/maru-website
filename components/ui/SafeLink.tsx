import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface SafeLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
  className?: string;
}

export function SafeLink({ href, children, className, ...props }: SafeLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
