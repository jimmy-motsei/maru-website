import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "boxed";
}

export function Input({ className, variant = "default", ...props }: InputProps) {
  const baseStyles = "w-full focus:outline-none transition-all duration-200";
  const variants = {
    default: "h-[70px] border-b border-black/20 bg-transparent px-[30px] text-[12px] font-medium uppercase tracking-[2px] text-black placeholder:text-black/50 dark:border-white/20 dark:text-white dark:placeholder:text-white/50",
    boxed: "px-4 py-3.5 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-[#3DD6D0]/50 focus:border-[#3DD6D0]"
  };

  return (
    <input
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}
