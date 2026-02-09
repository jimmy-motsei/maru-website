import { cn } from "@/lib/utils";

type HeadlineTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadlineWeight = "light" | "strong";

interface SplitHeadlineProps {
  as?: HeadlineTag;
  leadingText: string;
  emphasisText: string;
  className?: string;
  emphasisClassName?: string;
  breakBeforeEmphasis?: boolean;
  breakClassName?: string;
  leadingWeight?: HeadlineWeight;
  emphasisWeight?: HeadlineWeight;
}

export function SplitHeadline({
  as = "h1",
  leadingText,
  emphasisText,
  className,
  emphasisClassName,
  breakBeforeEmphasis = true,
  breakClassName = "hidden md:block",
  leadingWeight = "light",
  emphasisWeight = "strong",
}: SplitHeadlineProps) {
  const Tag = as;
  const leadingWeightClass = leadingWeight === "strong" ? "maru-headline-split-strong" : "maru-headline-split-light";
  const emphasisWeightClass = emphasisWeight === "strong" ? "maru-headline-split-strong" : "maru-headline-split-light";

  return (
    <Tag className={cn("maru-headline-split", leadingWeightClass, className)}>
      {leadingText}
      {breakBeforeEmphasis ? <br className={breakClassName} /> : " "}
      <span className={cn(emphasisWeightClass, emphasisClassName)}>{emphasisText}</span>
    </Tag>
  );
}
