import { getLocationBySlug } from "@/data/locations";
import LocationPageTemplate from "../_template";

const location = getLocationBySlug("grayhawk")!;

export const metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  openGraph: { images: ["/og-image.jpg"] },
};

export default function GrayhawkPage() {
  return <LocationPageTemplate location={location} />;
}
