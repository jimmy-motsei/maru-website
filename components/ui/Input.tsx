import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-input w-full border-b border-black/20 bg-transparent px-8 text-xs font-medium uppercase tracking-[2px] text-black placeholder:text-black/50 focus:outline-none dark:border-white/20 dark:text-white dark:placeholder:text-white/50 transition-colors",
        className
      )}
      {...props}
    />
  );
}
