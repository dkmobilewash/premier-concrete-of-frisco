import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Premier Concrete Of Frisco. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="pt-28 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal">
          <h1 className="font-display text-4xl font-bold text-charcoal mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-mid mb-8">
            Last updated: January 1, 2024
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            Premier Concrete Of Frisco collects personal information that you
            voluntarily provide when you use our contact form or communicate
            with us directly. This information may include your full name,
            phone number, email address, service area or neighborhood, the
            type of concrete service you are interested in, and a description
            of your project. We collect this information solely to respond to
            your inquiry and provide you with a project estimate.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            The personal information you provide is used exclusively to
            respond to your inquiry, prepare project estimates, schedule
            consultations, and communicate with you about concrete services
            you have expressed interest in. We may also use your contact
            information to follow up on past inquiries or completed projects
            to ensure your satisfaction.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Information Sharing
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            Premier Concrete Of Frisco does not sell, trade, rent, or
            otherwise share your personal information with third parties for
            marketing purposes. We may share your information only when
            required by law, to protect our rights, or with trusted service
            providers who assist us in operating our website and conducting
            our business, provided those parties agree to keep your
            information confidential.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Cookies and Tracking
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            Our website may use cookies and similar tracking technologies for
            basic analytics purposes, such as understanding how visitors use
            our site. These cookies do not collect personally identifiable
            information. We may use third-party analytics services, such as
            Google Analytics, which have their own privacy policies governing
            the use of data they collect. You can choose to disable cookies
            through your browser settings, though this may affect certain
            features of our website.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet
            or electronic storage is completely secure, and we cannot
            guarantee absolute security of your data.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            You have the right to request access to the personal information
            we hold about you, request correction of inaccurate information,
            or request deletion of your data. To exercise any of these rights,
            please contact us using the information below. We will respond to
            your request within a reasonable timeframe.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable laws. Any changes will be
            posted on this page with an updated revision date. We encourage
            you to review this policy periodically.
          </p>

          <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-mid leading-relaxed mb-4">
            If you have questions about this Privacy Policy or wish to request
            the removal of your personal data, please contact us at:
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
