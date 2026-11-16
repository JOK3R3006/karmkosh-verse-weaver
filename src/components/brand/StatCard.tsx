import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
}

export function StatCard({ label, value, hint, icon: Icon }: StatCardProps) {
  return (
    <div className="surface surface-hover p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-brand-rose">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
      <div className="tabular mt-5 text-4xl font-semibold tracking-tight text-foreground">{value}</div>
      <p className="mt-2 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}
