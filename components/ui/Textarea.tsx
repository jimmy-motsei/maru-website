import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[150px] w-full border-b border-black/20 bg-transparent p-8 text-xs font-medium uppercase tracking-[2px] text-black placeholder:text-black/70 focus:outline-none dark:border-white/20 dark:text-white dark:placeholder:text-white/70",
        className
      )}
      {...props}
    />
  );
}
