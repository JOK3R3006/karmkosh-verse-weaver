import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Creators", href: "/creators" },
  { name: "Pricing", href: "/pricing" },
];

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-white/[0.08] bg-background/75 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-[4.5rem] items-center justify-between px-4">
        <Logo />

        {/* Desktop navigation */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-xl md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-white/10 text-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/auth">
              Get Started
              <ArrowRight />
            </Link>
          </Button>
        </div>

        {/* Mobile navigation */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] border-white/10 bg-background/95 backdrop-blur-xl">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <Logo />
            <nav aria-label="Mobile" className="mt-10 flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "display border-b border-white/[0.06] py-4 text-3xl transition-colors",
                    isActive(item.href) ? "text-gradient" : "text-foreground/80 hover:text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 grid gap-3">
              <Button variant="outline" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link to="/auth">
                  Get Started
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
