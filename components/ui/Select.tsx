import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "default" | "boxed";
}

export function Select({ className, variant = "default", ...props }: SelectProps) {
  const baseStyles = "w-full appearance-none focus:outline-none transition-all duration-200";
  const variants = {
    default: "h-[70px] border-b border-black/20 bg-transparent px-8 text-xs font-medium uppercase tracking-[2px] text-black placeholder:text-black/70 dark:border-white/20 dark:text-white dark:placeholder:text-white/70 [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-zinc-900 dark:[&>option]:text-white",
    boxed: "px-4 py-3.5 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#3DD6D0]/50 focus:border-[#3DD6D0] [&>option]:bg-white [&>option]:text-zinc-900"
  };

  return (
    <div className="relative">
      <select
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
      <div className={cn("pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-50", variant === "boxed" ? "text-zinc-500" : "")}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
