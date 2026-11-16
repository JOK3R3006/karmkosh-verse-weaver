import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { BackButton } from "@/components/BackButton";

const points = [
  "Keep 90% of every sale",
  "UPI, cards and net banking built in",
  "Go live in minutes, free to start",
];

interface AuthShellProps {
  backTo: string;
  children: ReactNode;
}

/** Two-column frame shared by the sign-in, sign-up and password-reset screens. */
export function AuthShell({ backTo, children }: AuthShellProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      {/* Brand panel */}
      <aside className="relative hidden overflow-hidden border-r border-white/[0.07] lg:flex lg:flex-col lg:justify-between lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 20% 0%, hsl(var(--brand-rose) / 0.28), transparent 70%), radial-gradient(60% 50% at 100% 100%, hsl(var(--brand-gold) / 0.16), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
        <Logo className="relative" />
        <div className="relative">
          <p className="eyebrow mb-6">India's creator-first marketplace</p>
          <h2 className="display max-w-lg text-6xl text-foreground xl:text-7xl">
            Turn what you know into <span className="text-gradient italic">what you earn.</span>
          </h2>
          <ul className="mt-10 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-foreground/85">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-rose/15 text-brand-rose">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-xs text-muted-foreground">© {new Date().getFullYear()} KarmKosh · Made in India</p>
      </aside>

      {/* Form panel */}
      <main className="flex flex-col px-4 py-6 sm:px-8">
        <div className="flex items-center justify-between">
          <BackButton to={backTo} className="-ml-2" />
          <Logo className="lg:hidden" />
        </div>
        <div className="flex flex-1 items-center justify-center py-10">
          <div className="animate-in-up w-full max-w-[26rem]">{children}</div>
        </div>
      </main>
    </div>
  );
}
