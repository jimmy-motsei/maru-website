import { cn } from "@/lib/utils";

export function Checkbox({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={cn(
          "peer h-5 w-5 appearance-none rounded-[3px] border bg-transparent transition-colors border-[var(--color-border-strong)] checked:bg-cyan checked:border-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-1",
          className
        )}
        {...props}
      />
      <svg
        className="pointer-events-none absolute left-0 top-0 hidden h-5 w-5 text-black peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}
