import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}

export function SectionTitle({ children, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn("relative mb-16 block", align === "right" && "text-right", className)}>
      <span className={cn(
        "relative text-light-soft",
        "before:absolute before:top-3 before:h-px before:w-[600px] before:bg-white/20",
        align === "right" ? "before:left-[calc(100%+30px)]" : "before:right-[calc(100%+30px)]"
      )}>
        {children}
      </span>
    </div>
  );
}
