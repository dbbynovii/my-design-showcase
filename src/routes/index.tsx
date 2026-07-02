import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import slideGk from "@/assets/slide-gk.asset.json";
import slideKids from "@/assets/slide-kids.asset.json";
import slideRect from "@/assets/slide-rect.asset.json";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Slideshow" },
      { name: "description", content: "Full-screen slideshow portfolio." },
      { property: "og:title", content: "Portfolio — Slideshow" },
      { property: "og:description", content: "Full-screen slideshow portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { src: slideGk.url, alt: "Guru Kreator" },
  { src: slideKids.url, alt: "Little Wear" },
  { src: slideRect.url, alt: "Solusi Mitra" },
];

// Rotation rule: dot 1 -> slide 2, dot 2 -> slide 3, dot 3 -> slide 1
const dotTarget = (dotIndex: number) => (dotIndex + 1) % slides.length;

function Index() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-background">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.alt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
            i === current ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center gap-4 md:bottom-12">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${dotTarget(i) + 1}`}
            onClick={() => setCurrent(dotTarget(i))}
            className={cn(
              "group rounded-full bg-white/70 ring-1 ring-black/10 backdrop-blur-sm",
              "h-3 w-3 transition-all duration-300 ease-out",
              "hover:h-5 hover:w-5 hover:bg-white focus-visible:h-5 focus-visible:w-5 focus-visible:bg-white",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
              i === current && "h-4 w-4 bg-white",
            )}
          />
        ))}
      </div>
    </div>
  );
}
