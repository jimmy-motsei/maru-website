import { cn } from "@/lib/utils";

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(
          "h-[70px] w-full appearance-none border-b border-black/20 bg-transparent px-8 text-xs font-medium uppercase tracking-[2px] text-black placeholder:text-black/70 focus:outline-none dark:border-white/20 dark:text-white dark:placeholder:text-white/70 [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-zinc-900 dark:[&>option]:text-white",
          className
        )}
        {...props}
      />
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-50">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
