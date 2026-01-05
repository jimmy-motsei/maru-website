import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "boxed";
}

export function Textarea({ className, variant = "default", ...props }: TextareaProps) {
  const baseStyles = "w-full focus:outline-none transition-all duration-200";
  const variants = {
    default: "h-[300px] border-b border-black/20 bg-transparent py-[15px] px-[30px] text-[12px] font-medium uppercase tracking-[2px] text-black placeholder:text-black/50 dark:border-white/20 dark:text-white dark:placeholder:text-white/50",
    boxed: "min-h-[120px] px-4 py-3.5 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#3DD6D0]/50 focus:border-[#3DD6D0]"
  };

  return (
    <textarea
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}
