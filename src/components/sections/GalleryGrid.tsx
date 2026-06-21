"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

const categories = [
  "All",
  "Driveways",
  "Patios",
  "Pool Decks",
  "Block Walls",
  "Foundations",
  "Commercial",
];

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/seed/gal1/600/400", alt: "Stamped concrete driveway in Frisco", category: "Driveways" },
  { id: 2, src: "https://picsum.photos/seed/gal2/600/400", alt: "Decorative patio with outdoor kitchen", category: "Patios" },
  { id: 3, src: "https://picsum.photos/seed/gal3/600/400", alt: "Cool deck pool surround", category: "Pool Decks" },
  { id: 4, src: "https://picsum.photos/seed/gal4/600/400", alt: "Retaining block wall", category: "Block Walls" },
  { id: 5, src: "https://picsum.photos/seed/gal5/600/400", alt: "Residential foundation pour", category: "Foundations" },
  { id: 6, src: "https://picsum.photos/seed/gal6/600/400", alt: "Commercial parking lot concrete", category: "Commercial" },
  { id: 7, src: "https://picsum.photos/seed/gal7/600/400", alt: "Exposed aggregate driveway", category: "Driveways" },
  { id: 8, src: "https://picsum.photos/seed/gal8/600/400", alt: "Stamped patio in Starwood", category: "Patios" },
  { id: 9, src: "https://picsum.photos/seed/gal9/600/400", alt: "Pool deck resurfacing", category: "Pool Decks" },
  { id: 10, src: "https://picsum.photos/seed/gal10/600/400", alt: "Privacy block wall", category: "Block Walls" },
  { id: 11, src: "https://picsum.photos/seed/gal11/600/400", alt: "Post-tension slab foundation", category: "Foundations" },
  { id: 12, src: "https://picsum.photos/seed/gal12/600/400", alt: "Commercial sidewalk and curb", category: "Commercial" },
  { id: 13, src: "https://picsum.photos/seed/gal13/600/400", alt: "Broom finish driveway", category: "Driveways" },
  { id: 14, src: "https://picsum.photos/seed/gal14/600/400", alt: "Backyard patio extension", category: "Patios" },
  { id: 15, src: "https://picsum.photos/seed/gal15/600/400", alt: "Textured pool deck finish", category: "Pool Decks" },
  { id: 16, src: "https://picsum.photos/seed/gal16/600/400", alt: "Commercial loading dock", category: "Commercial" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full font-display text-sm font-semibold uppercase tracking-wider transition-all min-h-[44px]",
                activeCategory === cat
                  ? "bg-gold text-white"
                  : "text-charcoal border border-border hover:border-gold hover:text-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[3/2] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <span className="font-display text-sm font-semibold text-gold bg-black/70 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4 rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
