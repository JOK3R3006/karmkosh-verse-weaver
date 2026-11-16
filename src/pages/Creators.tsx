import { Button } from "@/components/ui/button";
import { DollarSign, Users, Shield, Zap, Globe, ArrowRight, Play, BarChart3, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/brand/SectionHeading";

export default function Creators() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Keep 90% of Your Earnings",
      description: "We only take 10% commission. You keep the majority of what you earn.",
    },
    {
      icon: Users,
      title: "Built-in Audience",
      description: "Tap into our growing community of learners and buyers.",
    },
    {
      icon: Zap,
      title: "Easy Setup",
      description: "Get your course live in minutes with our intuitive creator tools.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "We handle all payments and provide secure file delivery.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Sell to customers worldwide with multi-currency support.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track your performance with detailed analytics and reports.",
    },
  ];

  const steps = [
    { step: "01", title: "Sign Up", description: "Create your creator account in under 2 minutes" },
    { step: "02", title: "Upload Content", description: "Add your courses, ebooks, or digital products" },
    { step: "03", title: "Set Your Price", description: "You decide the pricing - we suggest what works" },
    { step: "04", title: "Start Earning", description: "Get paid weekly with our fast payout system" },
  ];

  const highlights = [
    { value: "New Platform", label: "Growing Community" },
    { value: "90%", label: "Revenue Share" },
    { value: "Easy", label: "Setup Process" },
  ];

  const audiences = [
    {
      title: "Perfect for Beginners",
      description:
        "Never created digital products before? No problem! Our platform is designed for first-time creators.",
      point: "Step-by-step guidance",
    },
    {
      title: "Share Your Skills",
      description:
        "Whether it's coding, design, cooking, or any other skill - there's an audience waiting to learn from you.",
      point: "Any topic works",
    },
    {
      title: "Build Your Business",
      description:
        "Start small and grow over time. Many successful creators started with just one simple product.",
      point: "Scale at your pace",
    },
  ];

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="eyebrow animate-in-up mb-6">For creators</p>
          <h1 className="display animate-in-up delay-1 mx-auto max-w-4xl text-5xl text-foreground sm:text-7xl lg:text-[5.5rem]">
            Turn Your Knowledge Into <span className="text-gradient italic">Income</span>
          </h1>
          <p className="animate-in-up delay-2 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Start your creator journey on KarmKosh. Create courses, sell digital products, and build your online
            business from scratch.
          </p>
          <div className="animate-in-up delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/auth?mode=signup">
                Start Creating Today
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Play />
              Watch Demo
            </Button>
          </div>

          <dl className="surface animate-in-up delay-4 mx-auto mt-16 grid max-w-4xl grid-cols-1 divide-y divide-white/[0.07] overflow-hidden md:mt-20 md:grid-cols-3 md:divide-x md:divide-y-0">
            {highlights.map((item) => (
              <div key={item.label} className="px-4 py-7">
                <dd className="display text-gradient text-4xl md:text-[2.75rem]">{item.value}</dd>
                <dt className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Benefits */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Benefits"
            title="Why Choose KarmKosh?"
            description="Everything you need to succeed as a creator"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="surface surface-hover p-8">
                <div className="icon-tile">
                  <benefit.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-foreground">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Process" title="How It Works" description="Get started in 4 simple steps" />

          <ol className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.step} className="relative border-t border-white/10 pt-6">
                <span aria-hidden className="absolute -top-px left-0 h-px w-12 bg-gradient-to-r from-brand-rose to-brand-gold" />
                <span className="display text-gradient text-6xl">{step.step}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Getting started */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Who it's for"
            title="Ready to Start?"
            description="Join KarmKosh and begin your creator journey today"
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience.title} className="surface surface-hover flex flex-col p-8">
                <h3 className="display text-3xl text-foreground">{audience.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{audience.description}</p>
                <p className="mt-6 flex items-center gap-2 border-t border-white/[0.07] pt-5 text-sm font-medium text-brand-rose">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                  {audience.point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-4 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="gradient-frame relative overflow-hidden px-6 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 80% at 50% 0%, hsl(var(--brand-rose) / 0.22), transparent 70%), radial-gradient(40% 60% at 85% 100%, hsl(var(--brand-gold) / 0.14), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="display mx-auto max-w-3xl text-5xl text-foreground md:text-7xl">
                Ready to Start Your <span className="text-gradient italic">Creator Journey?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Take the first step towards building your online business
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/auth?mode=signup">
                    Create Free Account
                    <ArrowRight />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
