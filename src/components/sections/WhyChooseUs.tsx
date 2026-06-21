import { Shield, DollarSign, Award, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description:
      "Every project is backed by full licensing and comprehensive insurance for your peace of mind.",
  },
  {
    icon: DollarSign,
    title: "Free Estimates",
    description:
      "We provide detailed, no-obligation estimates so you know exactly what to expect before work begins.",
  },
  {
    icon: Award,
    title: "20+ Years Serving DFW",
    description:
      "Two decades of concrete expertise in North Texas means we know the soil, the climate, and the craft.",
  },
  {
    icon: Star,
    title: "5-Star Rated on Google",
    description:
      "Our customers consistently rate us 5 stars for quality workmanship and reliable service.",
  },
];

type WhyChooseUsProps = {
  title?: string;
};

export default function WhyChooseUs({
  title = "Why Frisco Homeowners Choose Us",
}: WhyChooseUsProps) {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-mid leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
