import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";

export default function ServiceAreaMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Proudly Serving Frisco & Surrounding Communities"
          subtitle="Premier Concrete Of Frisco delivers premium concrete work across Frisco's finest neighborhoods and communities."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/service-areas/${location.slug}`}
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-gold text-gold-dark font-display text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-white transition-colors min-h-[44px]"
            >
              {location.city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
