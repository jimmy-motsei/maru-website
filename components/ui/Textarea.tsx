import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "h-[300px] w-full border-b border-black/20 bg-transparent py-[15px] px-[30px] text-[12px] font-medium uppercase tracking-[2px] text-black placeholder:text-black/50 focus:outline-none dark:border-white/20 dark:text-white dark:placeholder:text-white/50",
        className
      )}
      {...props}
    />
  );
}
