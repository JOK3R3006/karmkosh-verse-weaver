import { cn } from "@/lib/utils";

interface ProductCoverProps {
  title: string;
  category?: string;
  className?: string;
}

/** Generated cover art for products that have no image yet. */
export function ProductCover({ title, category, className }: ProductCoverProps) {
  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-xl border border-white/[0.08] bg-[#150d11]",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 90% at 15% 0%, hsl(var(--brand-rose) / 0.45), transparent 60%), radial-gradient(60% 80% at 100% 100%, hsl(var(--brand-gold) / 0.32), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.6) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(80% 80% at 50% 50%, black, transparent)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between p-5">
        {category ? (
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/70">{category}</span>
        ) : (
          <span />
        )}
        <span className="display line-clamp-2 max-w-[85%] text-2xl text-white/95 sm:text-[1.7rem]">{title}</span>
      </div>
    </div>
  );
}
