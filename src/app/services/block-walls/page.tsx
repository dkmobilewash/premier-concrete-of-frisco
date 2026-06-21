import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "../_template";

const service = getServiceBySlug("block-walls")!;

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
};

export default function BlockWallsPage() {
  return <ServicePageTemplate service={service} />;
}
