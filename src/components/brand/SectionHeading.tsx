import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl md:mb-16", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display text-4xl text-foreground md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
