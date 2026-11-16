import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render the mark without the wordmark. */
  markOnly?: boolean;
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-gradient-to-br from-brand-rose to-brand-gold shadow-[0_8px_24px_-10px_hsl(var(--brand-rose)/0.9)]",
        className,
      )}
    >
      <span className="absolute inset-px rounded-[0.62rem] bg-[#140c10]" />
      <span className="text-gradient relative font-display text-[1.35rem] leading-none">K</span>
    </span>
  );
}

export function Logo({ className, markOnly }: LogoProps) {
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="KarmKosh home">
      <LogoMark />
      {!markOnly && (
        <span className="text-[1.15rem] font-semibold tracking-tight text-foreground">
          Karm<span className="text-gradient">Kosh</span>
        </span>
      )}
    </Link>
  );
}
