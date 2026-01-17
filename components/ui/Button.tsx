import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "icon";
  href?: string;
  children?: React.ReactNode;
}

export function Button({ className, variant = "primary", href, children, ...props }: ButtonProps) {
  const baseStyles = "group inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-bold uppercase tracking-[1px] transition-all duration-300 ease-in-out whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#3DD6D0] text-black h-[52px] sm:h-[56px] px-8 hover:bg-[#35C4BE] hover:shadow-[0_6px_20px_rgba(61,214,208,0.5)] hover:-translate-y-0.5",
    outline: "border border-white/20 text-white h-[52px] sm:h-[56px] px-8 hover:bg-white/10",
    icon: "p-0 h-10 w-10 lg:h-[70px] lg:w-[70px] justify-center",
  };

  const content = (
    <>
      {children}
      {variant === "icon" && (
        <div className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-accent text-black transition-transform duration-400 group-hover:scale-110"
        )}>
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
