import Link from "next/link";
import { CheckCircle, ChevronDown, ArrowRight, Phone } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import type { Service } from "@/types";

export default function ServicePageTemplate({ service }: { service: Service }) {
  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <>
      <HeroSection
        title={service.name}
        subtitle={service.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc={service.heroImage}
        imageAlt={`${service.name} concrete service in Frisco, Texas`}
        height="h-[350px] md:h-[450px]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {service.intro.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-mid leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <div className="bg-charcoal text-white rounded-lg p-8 sticky top-28">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Get a Free Quote
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Ready to start your {service.name.toLowerCase()} project?
                  Contact us for a free, no-obligation estimate.
                </p>
                <Button variant="primary" href="/contact" className="w-full mb-4">
                  Request a Quote
                </Button>
                <a
                  href="tel:+12149494092"
                  className="flex items-center justify-center gap-2 text-gold font-display font-semibold text-sm min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  (214) 949-4092
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal text-center mb-12">
            Benefits of Our {service.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <p className="text-charcoal leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal text-center mb-12">
            Our Process
          </h2>
          <div className="space-y-8">
            {service.processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gold text-white font-display font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  {i < service.processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-mid leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details
                key={item.question}
                className="bg-white rounded-lg border border-border group"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-display font-semibold text-charcoal">
                  {item.question}
                  <ChevronDown className="w-5 h-5 text-gold shrink-0 faq-chevron transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-mid leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal text-center mb-12">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group flex items-center gap-6 p-6 bg-off-white rounded-lg border border-border hover:border-gold transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-mid leading-relaxed">
                      {related.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gold shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
