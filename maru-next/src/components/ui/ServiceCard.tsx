import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: React.ReactNode;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full p-8 transition-colors hover:bg-white/5">
      <h5 className="mb-8 text-xl font-medium text-white">{title}</h5>
      <p className="mb-8 text-light-soft">{description}</p>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black transition-transform group-hover:scale-115">
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
