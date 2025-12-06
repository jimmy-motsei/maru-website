import { cn } from "@/lib/utils";

interface DodecahedronProps {
  className?: string;
  scale?: number;
}

export function Dodecahedron({ className, scale = 1 }: DodecahedronProps) {
  return (
    <div 
      className={cn("mil-dodecahedron", className)}
      style={{ transform: `scale(${scale})` }}
    >
      {[...Array(12)].map((_, i) => (
        <div key={i} className="mil-pentagon">
          {[...Array(5)].map((_, j) => (
            <div key={j} />
          ))}
        </div>
      ))}
    </div>
  );
}
