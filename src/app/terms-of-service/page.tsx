import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Premier Concrete Of Frisco website. Read our terms governing the use of this website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className="pt-28 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal">
          <h1 className="font-display text-4xl font-bold text-charcoal mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-mid mb-8">
            Last updated: January 1, 2024
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            By accessing and using the Premier Concrete Of Frisco website
            located at premierconcreteofrisco.com, you accept and agree to be
            bound by these Terms of Service. If you do not agree to these
            terms, please do not use this website. We reserve the right to
            modify these terms at any time, and your continued use of the
            website constitutes acceptance of any changes.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Use of This Website
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            This website is provided for informational purposes about the
            concrete services offered by Premier Concrete Of Frisco. The
            content on this site, including text, images, and other materials,
            is intended for general information only and does not constitute a
            binding offer or contract for services. All service agreements are
            made separately in writing between Premier Concrete Of Frisco and
            the client.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            No Warranties
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            The information on this website is provided &ldquo;as is&rdquo;
            without any warranties, express or implied. Premier Concrete Of
            Frisco makes no representations or warranties regarding the
            accuracy, completeness, or reliability of any information on this
            site. Pricing, availability, project timelines, and service
            descriptions are subject to change without notice and may vary
            based on project-specific factors.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            In no event shall Premier Concrete Of Frisco, its owners,
            employees, or affiliates be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising out of
            your access to or use of this website. This includes, without
            limitation, damages for errors, omissions, interruptions, defects,
            delays, or any other issues related to the website or its content.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            All content on this website, including text, graphics, logos,
            images, and the overall design and layout, is the property of
            Premier Concrete Of Frisco and is protected by applicable
            copyright and trademark laws. You may not reproduce, distribute,
            modify, or create derivative works from any content on this site
            without our prior written consent.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Third-Party Links
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            This website may contain links to third-party websites. These
            links are provided for convenience only and do not imply
            endorsement or responsibility for the content, policies, or
            practices of those sites. Premier Concrete Of Frisco is not
            responsible for the availability or accuracy of external websites.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Governing Law
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of Texas, without regard to
            its conflict of law provisions. Any disputes arising under these
            terms shall be subject to the exclusive jurisdiction of the courts
            located in Collin County, Texas.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            If you have questions about these Terms of Service, please contact
            us at:
          </p>
          <ul className="text-mid space-y-1 mb-4">
            <li>Phone: (214) 949-4092</li>
            <li>Email: info@premierconcreteofrisco.com</li>
            <li>Location: Frisco, TX</li>
          </ul>
        </div>
      </div>
    </>
  );
}
