import { cn } from "@/lib/utils";

export function Label({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-4 block text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
