import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "icon";
  href?: string;
  children?: React.ReactNode;
}

export function Button({ className, variant = "primary", href, children, ...props }: ButtonProps) {
  const baseStyles = "group inline-flex items-center justify-center rounded-pill text-[12px] font-medium uppercase tracking-[2px] transition-all duration-300 ease-in-out whitespace-nowrap";
  
  const variants = {
    primary: "bg-highlight text-dark h-[70px] px-[50px] hover:bg-highlight-hover hover:scale-[1.015] hover:brightness-110",
    outline: "border border-white/20 text-white h-[70px] px-[50px] hover:bg-card-dark-hover hover:scale-[1.015]",
    icon: "p-0 h-[70px] w-[70px] justify-center",
  };

  const content = (
    <>
      {children}
      {variant === "icon" && (
        <div className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-transparent text-dark transition-transform duration-400 group-hover:scale-110",
           // Ashley uses a specific icon style, but for now we keep the existing arrow logic unless specific SVG requested.
           // However, if it's a primary button, Ashley usually has the icon on the right inside a circle.
           // The current 'icon' variant logic above is for a standalone icon button.
           // Standard buttons in Ashley have text + icon.
        )}>
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
      {/* Ashley Standard Button has Icon on Right */}
      {variant !== "icon" && (
        <div className="ml-[30px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-dark p-[10px] transition-transform duration-400 group-hover:scale-110">
           <ArrowRight className="h-full w-full text-highlight" />
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
