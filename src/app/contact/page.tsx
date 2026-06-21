import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Premier Concrete Of Frisco | Free Estimates",
  description:
    "Contact us for a free concrete estimate in Frisco, TX. Call (214) 949-4092 or fill out our online form. We serve Frisco and surrounding communities.",
  openGraph: {
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
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
        title="Get Your Free Concrete Estimate"
        subtitle="Tell us about your project and we'll get back to you within one business day."
        imageSrc="https://picsum.photos/seed/contact/1920/800"
        imageAlt="Contact Premier Concrete Of Frisco"
        height="h-[300px] md:h-[350px]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">
                Request a Quote
              </h2>
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <div className="bg-off-white rounded-lg p-8 sticky top-28">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <a
                    href="tel:+12149494092"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-gold transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-mid">Call Us</p>
                      <p className="font-display font-bold text-charcoal group-hover:text-gold transition-colors">
                        (214) 949-4092
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@premierconcreteofrisco.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-gold transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-mid">Email</p>
                      <p className="font-display font-semibold text-charcoal group-hover:text-gold transition-colors text-sm">
                        info@premierconcreteofrisco.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-mid">Business Hours</p>
                      <p className="font-display font-semibold text-charcoal">
                        Mon–Sat 7am–6pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-mid">Location</p>
                      <p className="font-display font-semibold text-charcoal">
                        Frisco, TX
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gold/5 border border-gold/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-charcoal leading-relaxed">
                      We respond to all inquiries within 1 business day. For
                      urgent projects, call us directly.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-display text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                    Service Areas
                  </h4>
                  <p className="text-sm text-mid leading-relaxed">
                    Frisco, Starwood, Phillips Creek Ranch, Grayhawk, Newman
                    Village, Richwoods, Preston Vineyards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107095.46356865695!2d-96.89583605!3d33.15058205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3d4e57ee31e3%3A0xbf14fc7b63bf22ef!2sFrisco%2C%20TX!5e0!3m2!1sen!1sus!4v1700000000000!5m2!1sen!1sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Premier Concrete Of Frisco location map"
            className="rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
