"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  serviceLinks: { name: string; href: string }[];
  areaLinks: { name: string; href: string }[];
};

export default function MobileMenu({
  isOpen,
  onClose,
  serviceLinks,
  areaLinks,
}: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-black text-white overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <a
            href="tel:+12149494092"
            className="flex items-center gap-2 text-gold font-display font-bold text-lg min-h-[44px]"
          >
            <Phone className="w-5 h-5" />
            (214) 949-4092
          </a>
          <button
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6 space-y-1">
          <div>
            <button
              onClick={() => toggleSection("services")}
              className="flex items-center justify-between w-full py-3 font-display text-lg font-medium uppercase tracking-wider min-h-[44px]"
            >
              Services
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gold transition-transform",
                  expandedSection === "services" && "rotate-180"
                )}
              />
            </button>
            {expandedSection === "services" && (
              <div className="pl-4 pb-2 space-y-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2.5 text-gray-300 hover:text-gold transition-colors min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSection("areas")}
              className="flex items-center justify-between w-full py-3 font-display text-lg font-medium uppercase tracking-wider min-h-[44px]"
            >
              Service Areas
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gold transition-transform",
                  expandedSection === "areas" && "rotate-180"
                )}
              />
            </button>
            {expandedSection === "areas" && (
              <div className="pl-4 pb-2 space-y-1">
                {areaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2.5 text-gray-300 hover:text-gold transition-colors min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            onClick={onClose}
            className="block py-3 font-display text-lg font-medium uppercase tracking-wider min-h-[44px]"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="block py-3 font-display text-lg font-medium uppercase tracking-wider min-h-[44px]"
          >
            Contact Us
          </Link>
        </nav>

        <div className="p-6 border-t border-white/10">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-gold text-white font-display font-bold uppercase tracking-wider py-4 rounded transition-colors hover:bg-gold-dark min-h-[44px]"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
