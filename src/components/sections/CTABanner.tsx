import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-gold clip-diagonal-both">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Concrete Project?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Get a free estimate today — no obligation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="dark" href="tel:+12149494092">
            Call Now
          </Button>
          <Button variant="outline-white" href="/contact">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
