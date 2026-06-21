import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "../_template";

const service = getServiceBySlug("pool-decks")!;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
};

export default function PoolDecksPage() {
  return <ServicePageTemplate service={service} />;
}
