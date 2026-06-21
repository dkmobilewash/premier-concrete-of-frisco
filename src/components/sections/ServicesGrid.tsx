import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

type ServicesGridProps = {
  showHeading?: boolean;
  headingTitle?: string;
};

export default function ServicesGrid({
  showHeading = true,
  headingTitle = "Our Concrete Services",
}: ServicesGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            title={headingTitle}
            subtitle="From residential driveways to commercial slabs, we deliver premium concrete work across Frisco."
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-mid leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-gold font-display text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
