import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Code,
  Palette,
  Briefcase,
  Camera,
  Music,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { ProductCover } from "@/components/brand/ProductCover";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Balance Boost Blueprint",
      creator: "KarmKosh Team",
      price: 0,
      originalPrice: 0,
      rating: 0,
      students: 0,
      image: "/placeholder.svg",
      category: "Health",
      bestseller: false,
      isFree: true,
    },
  ];

  const categories = [
    { icon: Code, name: "Programming", courses: 0 },
    { icon: Palette, name: "Design", courses: 0 },
    { icon: Briefcase, name: "Business", courses: 0 },
    { icon: Camera, name: "Photography", courses: 0 },
    { icon: Music, name: "Music", courses: 0 },
    { icon: BookOpen, name: "Health", courses: 1 },
  ];

  const stats = [
    { value: "1", label: "Course Available" },
    { value: "1", label: "Verified Creator" },
    { value: "100%", label: "Free to Start" },
    { value: "₹0", label: "Platform Fees" },
  ];

  const testimonials = [
    {
      name: "Starting Soon",
      role: "First User",
      content: "Join us as we launch India's most creator-friendly marketplace",
      avatar: "/placeholder.svg",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Browse Courses",
      description: "Explore our growing collection of digital products and courses from verified creators",
      icon: BookOpen,
    },
    {
      step: "02",
      title: "Learn & Grow",
      description: "Access high-quality content designed to help you advance your skills and career",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Join Community",
      description: "Connect with creators and fellow learners in our growing community",
      icon: Users,
    },
  ];

  const reasons = [
    {
      icon: Globe,
      title: "Learn Anywhere",
      description: "Access your courses on any device, anytime, anywhere. Download for offline learning.",
    },
    {
      icon: Shield,
      title: "Verified Creators",
      description: "All our instructors are verified experts with proven track records in their fields.",
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Engage with quizzes, assignments, and community discussions for better learning outcomes.",
    },
  ];

  const faqs = [
    {
      question: "Is KarmKosh free to use?",
      answer:
        "Yes! Creating an account and browsing courses is completely free. You only pay for the courses you choose to purchase.",
    },
    {
      question: "How do I become a creator?",
      answer:
        "Simply sign up and click 'Become a Creator'. We'll guide you through setting up your profile and publishing your first course.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods including UPI, credit/debit cards, and net banking for your convenience.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes, we offer a satisfaction guarantee. If you're not happy with a course, contact us within 30 days for a full refund.",
    },
  ];

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="relative pb-20 pt-16 md:pb-28 md:pt-24">
        {/* Fading grid behind the headline */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(60% 70% at 50% 20%, black, transparent)",
            WebkitMaskImage: "radial-gradient(60% 70% at 50% 20%, black, transparent)",
          }}
        />

        <div className="container mx-auto px-4 text-center">
          <div className="animate-in-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-xs font-medium text-foreground/80 backdrop-blur">
            <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-rose to-brand-gold px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary-foreground">
              <Sparkles className="h-3 w-3" />
              New
            </span>
            Built in India, for India's creators
          </div>

          <h1 className="display animate-in-up delay-1 mx-auto mt-8 max-w-5xl text-[2.9rem] text-foreground sm:text-7xl lg:text-[5.75rem]">
            India's Creator-First <span className="text-gradient italic">Digital Marketplace</span>
          </h1>

          <p className="animate-in-up delay-2 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Join the platform that puts creators first. Share your knowledge, build your community, and earn more with
            our transparent, creator-friendly approach. No hidden fees, just growth.
          </p>

          <div className="animate-in-up delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/marketplace">
                Explore Products
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link to="/creators">Start Creating</Link>
            </Button>
          </div>

          {/* Stats */}
          <dl className="surface animate-in-up delay-4 mx-auto mt-16 grid max-w-4xl grid-cols-2 overflow-hidden md:mt-20 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-white/[0.07] px-4 py-7 [&:nth-child(-n+2)]:border-b odd:border-r md:border-b-0 md:border-r md:[&:nth-child(-n+2)]:border-b-0 md:last:border-r-0"
              >
                <dd className="display text-gradient text-4xl md:text-5xl">{stat.value}</dd>
                <dt className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How it works"
            title="How KarmKosh Works"
            description="Simple steps to start your learning journey"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="surface surface-hover group relative overflow-hidden p-8">
                <span
                  aria-hidden
                  className="display absolute -right-2 -top-6 text-[8rem] leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-brand-rose/10"
                >
                  {step.step}
                </span>
                <div className="icon-tile">
                  <step.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Step {step.step}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Featured"
            title="Featured Product"
            description="Start your journey with our launch product"
          />

          <div className="mx-auto max-w-5xl">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <article className="gradient-frame grid gap-8 p-5 transition-transform duration-300 group-hover:-translate-y-1 md:grid-cols-2 md:gap-10 md:p-6">
                  <ProductCover title={product.title} category={product.category} className="md:aspect-auto md:min-h-[19rem]" />
                  <div className="flex flex-col justify-center px-1 pb-3 md:px-0 md:py-6 md:pr-6">
                    <div className="flex flex-wrap items-center gap-2">
                      {product.isFree && <Badge>Free</Badge>}
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <h3 className="display mt-5 text-4xl text-foreground md:text-5xl">{product.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">by {product.creator}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                      <span className="font-medium text-foreground">New</span>
                      <span className="text-muted-foreground">· Be the first to review</span>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-6">
                      <span className="text-2xl font-semibold tracking-tight text-foreground">Free</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-rose">
                        View product
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/marketplace">
                Visit Marketplace
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Categories"
            title="Popular Categories"
            description="Find courses in your area of interest"
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/marketplace?category=${category.name.toLowerCase()}`}
                className="surface surface-hover group flex flex-col items-start p-5"
              >
                <div className="icon-tile">
                  <category.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-semibold text-foreground">{category.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {category.courses} {category.courses === 1 ? "course" : "courses"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why KarmKosh */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                eyebrow="Why KarmKosh"
                title="Why Choose KarmKosh?"
                description="The best platform for learning and teaching in India"
                className="mb-0 md:mb-0 lg:sticky lg:top-28"
              />
            </div>
            <div className="lg:col-span-7">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-6 border-b border-white/[0.07] py-8 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <div className="icon-tile">
                    <reason.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="tabular text-xs font-semibold tracking-[0.2em] text-muted-foreground">0{index + 1}</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">{reason.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Community"
            title="Join Our Growing Community"
            description="Be part of India's next big creator platform"
          />

          <div className="mx-auto max-w-3xl">
            {testimonials.map((testimonial, index) => (
              <figure key={index} className="relative text-center">
                <span aria-hidden className="display text-gradient block text-8xl leading-[0.6]">
                  “
                </span>
                <blockquote className="display mt-2 text-3xl italic text-foreground/90 md:text-[2.6rem] md:leading-[1.15]">
                  {testimonial.content}
                </blockquote>
                <figcaption className="mt-8 inline-flex items-center gap-3 text-left">
                  <span className="icon-tile h-11 w-11 rounded-full">
                    <Users className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{testimonial.name}</span>
                    <span className="block text-xs text-muted-foreground">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section relative">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about KarmKosh"
          />

          <Accordion type="single" collapsible defaultValue="faq-0" className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="surface border-b-0 px-6 transition-colors data-[state=open]:border-brand-rose/25"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Creator CTA */}
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
              <p className="eyebrow mb-5">For creators</p>
              <h2 className="display mx-auto max-w-3xl text-5xl text-foreground md:text-7xl">
                Become a Creator <span className="text-gradient italic">Today</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Share your knowledge with millions of learners and earn 90% of every sale
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/creators">
                    Start Teaching
                    <ArrowRight />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link to="/pricing">View Creator Plans</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
