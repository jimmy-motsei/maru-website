import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "icon";
  href?: string;
  children?: React.ReactNode;
}

export function Button({ className, variant = "primary", href, children, ...props }: ButtonProps) {
  const baseStyles = "group inline-flex h-[60px] lg:h-[70px] items-center justify-center rounded-full px-4 pl-10 text-xs font-medium uppercase tracking-[2px] transition-all duration-400 hover:scale-[1.015] hover:brightness-110";
  
  const variants = {
    primary: "bg-accent text-black",
    outline: "border border-white/20 text-white hover:bg-white/5",
    icon: "p-0 h-10 w-10 lg:h-[70px] lg:w-[70px]",
  };

  const content = (
    <>
      {children && <span className="whitespace-nowrap">{children}</span>}
      <div className={cn(
        "ml-6 flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform duration-400 group-hover:scale-115",
        variant === "icon" && "ml-0 bg-accent text-black"
      )}>
        <ArrowRight className={cn("h-4 w-4", variant === "primary" ? "text-accent" : "text-black")} />
      </div>
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
