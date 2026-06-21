import { Shield, DollarSign, Award, Star } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ServiceAreaMap from "@/components/sections/ServiceAreaMap";
import CTABanner from "@/components/sections/CTABanner";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: DollarSign, label: "Free Estimates" },
  { icon: Award, label: "Serving Frisco Since 2003" },
  { icon: Star, label: "5-Star Google Rated" },
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Premier Concrete Of Frisco",
    telephone: "+12149494092",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Frisco",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      "Frisco",
      "Starwood",
      "Phillips Creek Ranch",
      "Grayhawk",
      "Newman Village",
      "Richwoods",
      "Preston Vineyards",
    ],
    priceRange: "$$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <HeroSection
        title="Frisco's Concrete Experts"
        subtitle="From driveways to commercial slabs — premium craftsmanship, fair prices, and a finish built to last."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        secondaryCtaText="See Our Work"
        secondaryCtaHref="/gallery"
        imageSrc="https://picsum.photos/seed/herohome/1920/1080"
        imageAlt="Premium concrete driveway in Frisco, Texas"
        fullHeight
      />

      <section className="bg-off-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center justify-center gap-2 py-3"
              >
                <badge.icon className="w-5 h-5 text-gold shrink-0" />
                <span className="font-display text-sm font-semibold text-charcoal uppercase tracking-wider">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <WhyChooseUs />

      <TestimonialsSection />

      <ServiceAreaMap />

      <CTABanner />
    </>
  );
}
