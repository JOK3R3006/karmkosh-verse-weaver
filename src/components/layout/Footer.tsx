import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Marketplace", to: "/marketplace" },
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Integrations", to: "/integrations" },
    ],
  },
  {
    title: "For Creators",
    links: [
      { label: "Get Started", to: "/creators" },
      { label: "Resources", to: "/resources" },
      { label: "Community", to: "/community" },
      { label: "Case Studies", to: "/case-studies" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", to: "/help" },
      { label: "Contact Us", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

const socials = [
  { label: "Twitter", icon: Twitter },
  { label: "GitHub", icon: Github },
  { label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative mt-auto">
      <div className="hairline" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The ultimate platform for creators to sell digital products and build communities.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-muted-foreground transition-colors hover:border-brand-rose/40 hover:text-brand-rose"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} KarmKosh. All rights reserved.</p>
          <p>Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
