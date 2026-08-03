import { cn } from "@/lib/utils";

export function Label({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-4 block text-xs font-bold uppercase tracking-widest text-ink-tertiary",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
