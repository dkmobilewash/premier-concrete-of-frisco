"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { name: "Concrete Services", href: "/services" },
  { name: "Driveways", href: "/services/driveways" },
  { name: "Patios", href: "/services/patios" },
  { name: "Pool Decks", href: "/services/pool-decks" },
  { name: "Block Walls", href: "/services/block-walls" },
  { name: "Foundations & Slabs", href: "/services/foundations-slabs" },
  { name: "Commercial Concrete", href: "/services/commercial-concrete" },
];

const areaLinks = [
  { name: "Frisco", href: "/service-areas/frisco" },
  { name: "Starwood", href: "/service-areas/starwood" },
  { name: "Phillips Creek Ranch", href: "/service-areas/phillips-creek-ranch" },
  { name: "Grayhawk", href: "/service-areas/grayhawk" },
  { name: "Newman Village", href: "/service-areas/newman-village" },
  { name: "Richwoods", href: "/service-areas/richwoods" },
  { name: "Preston Vineyards", href: "/service-areas/preston-vineyards" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-baseline gap-1.5">
              <span
                className={cn(
                  "font-display font-bold text-xl tracking-tight transition-colors",
                  scrolled ? "text-charcoal" : "text-white"
                )}
              >
                Premier Concrete
              </span>
              <span className="font-display text-gold text-sm font-medium">
                Of Frisco
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-display text-sm font-medium uppercase tracking-wider transition-colors min-h-[44px]",
                    scrolled
                      ? "text-charcoal hover:text-gold"
                      : "text-white hover:text-gold"
                  )}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === "services" && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-border py-2 mt-0">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-2.5 text-sm text-charcoal hover:text-gold hover:bg-off-white border-l-2 border-transparent hover:border-gold transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("areas")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-display text-sm font-medium uppercase tracking-wider transition-colors min-h-[44px]",
                    scrolled
                      ? "text-charcoal hover:text-gold"
                      : "text-white hover:text-gold"
                  )}
                >
                  Service Areas
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === "areas" && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-border py-2 mt-0">
                    {areaLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-2.5 text-sm text-charcoal hover:text-gold hover:bg-off-white border-l-2 border-transparent hover:border-gold transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={cn(
                  "px-4 py-2 font-display text-sm font-medium uppercase tracking-wider transition-colors min-h-[44px] flex items-center",
                  scrolled
                    ? "text-charcoal hover:text-gold"
                    : "text-white hover:text-gold"
                )}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-4 py-2 font-display text-sm font-medium uppercase tracking-wider transition-colors min-h-[44px] flex items-center",
                  scrolled
                    ? "text-charcoal hover:text-gold"
                    : "text-white hover:text-gold"
                )}
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:+12149494092"
                className="hidden md:flex items-center gap-2 text-gold font-display font-bold text-sm tracking-wider hover:text-gold-dark transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                (214) 949-4092
              </a>

              <button
                className="lg:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-colors",
                    scrolled ? "bg-charcoal" : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-colors",
                    scrolled ? "bg-charcoal" : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-0.5 transition-colors",
                    scrolled ? "bg-charcoal" : "bg-white"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        serviceLinks={serviceLinks}
        areaLinks={areaLinks}
      />
    </>
  );
}
