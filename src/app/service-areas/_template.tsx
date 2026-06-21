import Link from "next/link";
import {
  Truck,
  Hammer,
  Waves,
  Cuboid as CubeIcon,
  Building2,
  Warehouse,
  MapPin,
  Star,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/forms/ContactForm";
import type { Location } from "@/types";

const serviceIcons: Record<string, React.ElementType> = {
  driveways: Truck,
  patios: Hammer,
  "pool-decks": Waves,
  "block-walls": CubeIcon,
  "foundations-slabs": Building2,
  "commercial-concrete": Warehouse,
};

const serviceNames: Record<string, string> = {
  driveways: "Driveways",
  patios: "Patios",
  "pool-decks": "Pool Decks",
  "block-walls": "Block Walls",
  "foundations-slabs": "Foundations & Slabs",
  "commercial-concrete": "Commercial Concrete",
};

export default function LocationPageTemplate({
  location,
}: {
  location: Location;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://premierconcreteofrisco.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://premierconcreteofrisco.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.city,
        item: `https://premierconcreteofrisco.com/service-areas/${location.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HeroSection
        title={`Concrete Contractors in ${location.city}, Frisco TX`}
        subtitle={location.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="#contact-form"
        imageSrc="https://picsum.photos/seed/location/1920/800"
        imageAlt={`Concrete services in ${location.city}, Frisco Texas`}
        height="h-[350px] md:h-[450px]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {location.intro.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-mid leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal text-center mb-12">
            Concrete Services We Offer in {location.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.services.map((slug) => {
              const Icon = serviceIcons[slug] || Hammer;
              const name = serviceNames[slug] || slug;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="flex items-center gap-4 p-5 bg-white rounded-lg border border-border hover:border-gold hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-display font-semibold text-charcoal group-hover:text-gold transition-colors">
                    {name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-off-white rounded-lg p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-gold" />
              <h3 className="font-display text-xl font-semibold text-charcoal">
                Neighborhoods We Serve in {location.city}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {location.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="px-4 py-2 bg-white rounded-full text-sm text-charcoal border border-border"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-gold fill-gold" />
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            &ldquo;{location.testimonial.quote}&rdquo;
          </p>
          <p className="font-display font-semibold text-white">
            {location.testimonial.name}
          </p>
          <p className="text-gold text-sm">{location.testimonial.city}</p>
        </div>
      </section>

      <section className="py-12 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-mid">
            We also serve{" "}
            {location.nearbyAreas.map((area, i) => (
              <span key={area}>
                <Link
                  href={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                  className="text-gold hover:text-gold-dark font-semibold transition-colors"
                >
                  {area}
                </Link>
                {i < location.nearbyAreas.length - 2 && ", "}
                {i === location.nearbyAreas.length - 2 && ", and "}
              </span>
            ))}
            .
          </p>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal text-center mb-12">
            Get a Free Estimate in {location.city}
          </h2>
          <ContactForm preselectedArea={location.city} />
        </div>
      </section>
    </>
  );
}
