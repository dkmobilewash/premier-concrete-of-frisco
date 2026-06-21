import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Concrete Project Gallery",
  description:
    "Browse photos of our completed concrete projects across Frisco — driveways, patios, pool decks, block walls, and more.",
  openGraph: {
    images: ["/og-image.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work Speaks for Itself"
        subtitle="Browse completed concrete projects from across Frisco and surrounding communities."
        imageSrc="https://picsum.photos/seed/gallery/1920/800"
        imageAlt="Concrete project gallery"
        height="h-[300px] md:h-[350px]"
      />

      <GalleryGrid />

      <CTABanner />
    </>
  );
}
