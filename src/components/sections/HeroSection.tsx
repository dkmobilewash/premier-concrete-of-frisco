import Image from "next/image";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
  fullHeight?: boolean;
  height?: string;
};

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  fullHeight = false,
  height = "h-[400px] md:h-[500px]",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full flex items-center overflow-hidden",
        fullHeight ? "min-h-screen" : height
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 concrete-texture opacity-5" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-8 max-w-2xl">
            {subtitle}
          </p>
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaText && ctaHref && (
                <Button variant="primary" href={ctaHref}>
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Button variant="outline-white" href={secondaryCtaHref}>
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {fullHeight && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      )}
    </section>
  );
}
