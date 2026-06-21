export interface Service {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroSubtitle: string;
  shortDescription: string;
  intro: string;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedServices: string[];
}

export interface Location {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  services: string[];
  testimonial: { quote: string; name: string; city: string };
}

export interface Testimonial {
  quote: string;
  name: string;
  area: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}
