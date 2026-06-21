import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "../_template";

const service = getServiceBySlug("commercial-concrete")!;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
};

export default function CommercialConcretePage() {
  return <ServicePageTemplate service={service} />;
}
