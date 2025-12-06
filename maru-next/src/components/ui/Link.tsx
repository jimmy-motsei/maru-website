import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "accent";
}

export function ArrowLink({ href, children, className, variant = "light" }: LinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center text-xs font-medium uppercase tracking-[2px]",
        variant === "light" && "text-white",
        variant === "dark" && "text-black",
        variant === "accent" && "text-accent",
        className
      )}
    >
      <span>{children}</span>
      <div className={cn(
        "ml-4 flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-400 group-hover:scale-115",
        variant === "light" && "bg-white/10 text-white",
        variant === "dark" && "bg-black/10 text-black",
        variant === "accent" && "bg-white/10 text-accent"
      )}>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
