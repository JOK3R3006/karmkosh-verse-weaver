import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Basic analytics",
      "Standard support",
      "File hosting up to 1GB",
      "Basic course builder",
      "Secure payment processing",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Creator",
    price: "₹999",
    period: "/month",
    description: "For serious creators",
    features: [
      "Advanced analytics",
      "Priority support",
      "File hosting up to 10GB",
      "Advanced course builder",
      "Custom landing pages",
      "Email marketing tools",
      "Premium support",
    ],
    cta: "Start Creating",
    popular: true,
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    description: "For established businesses",
    features: [
      "Full analytics suite",
      "24/7 dedicated support",
      "Unlimited file hosting",
      "White-label options",
      "Advanced marketing tools",
      "API access",
      "Custom integrations",
      "Priority processing",
    ],
    cta: "Go Pro",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="pb-24 pt-14 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="eyebrow mb-4">Pricing</p>
          <h1 className="display text-5xl text-foreground md:text-7xl">
            Simple, <span className="text-gradient italic">Transparent</span> Pricing
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Choose the plan that works best for your creator journey
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-8",
                plan.popular
                  ? "gradient-frame shadow-[0_40px_80px_-40px_hsl(var(--brand-rose)/0.45)] lg:-my-4 lg:py-12"
                  : "surface",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-rose to-brand-gold px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Most popular
                </span>
              )}

              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">{plan.name}</h2>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="tabular text-5xl font-semibold tracking-tight text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

              <Button variant={plan.popular ? "default" : "outline"} className="mt-8 w-full" size="lg" asChild>
                <Link to="/auth?mode=signup">{plan.cta}</Link>
              </Button>

              <div className="hairline my-8" />

              <ul className="space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-brand-rose/15 text-brand-rose">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-xl text-center">
          <p className="text-sm text-muted-foreground">
            All plans include secure payments, instant payouts, and our creator community
          </p>
          <p className="mt-3 text-xs text-muted-foreground/70">
            * Small platform fee on successful sales. No hidden fees or setup costs.
          </p>
        </div>
      </div>
    </div>
  );
}
