import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Services in Frisco TX",
  description:
    "Explore our full range of concrete services including driveways, patios, pool decks, block walls, foundations, and commercial concrete work in Frisco, TX.",
  openGraph: {
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Concrete Services in Frisco"
        subtitle="From residential driveways to commercial slabs, Premier Concrete Of Frisco delivers quality craftsmanship on every project."
        imageSrc="https://picsum.photos/seed/services/1920/800"
        imageAlt="Concrete services in Frisco, Texas"
        height="h-[350px] md:h-[400px]"
      />

      <section className="py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-mid leading-relaxed">
            Premier Concrete Of Frisco offers a complete range of residential
            and commercial concrete services. Whether you&apos;re upgrading your
            home&apos;s curb appeal with a new driveway, creating the perfect outdoor
            living space with a stamped patio, or building a commercial parking
            lot, our licensed and insured team delivers work that meets
            Frisco&apos;s high standards — on time and on budget.
          </p>
        </div>
      </section>

      <ServicesGrid />

      <WhyChooseUs />

      <CTABanner />
    </>
  );
}
