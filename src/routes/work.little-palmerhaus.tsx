import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import mainAsset from "@/assets/lp-main.png.asset.json";
import lp1 from "@/assets/lp-1.png.asset.json";
import lp2 from "@/assets/lp-2.png.asset.json";
import lp3 from "@/assets/lp-3.png.asset.json";
import lp4 from "@/assets/lp-4.png.asset.json";
import lp5 from "@/assets/lp-5.png.asset.json";
import lp6 from "@/assets/lp-6.png.asset.json";
import lp7 from "@/assets/lp-7.png.asset.json";

export const Route = createFileRoute("/work/little-palmerhaus")({
  head: () => ({
    meta: [
      { title: "Little Palmerhaus — Social Media & E-commerce Design" },
      {
        name: "description",
        content:
          "Social media and e-commerce key visual design for Little Palmerhaus, one of Indonesia's leading baby clothing brands.",
      },
      {
        property: "og:title",
        content: "Little Palmerhaus — Social Media & E-commerce Design",
      },
      {
        property: "og:description",
        content:
          "Key visual assets, catalogue post-production, and campaign design for Little Palmerhaus.",
      },
      { property: "og:image", content: mainAsset.url },
      { name: "twitter:image", content: mainAsset.url },
    ],
  }),
  component: LittlePalmerhaus,
});

function LittlePalmerhaus() {
  const gallery = [lp1, lp2, lp3, lp4, lp5, lp6, lp7];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/20">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="eyebrow hover:italic">
            ← Back to Index
          </Link>
          <span className="eyebrow text-foreground/60">Case Study</span>
        </div>
      </header>

      <section className="border-b border-foreground/20">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10 md:pt-14">
          <div className="overflow-hidden">
            <img
              src={mainAsset.url}
              alt="Little Wear by Little Palmerhaus"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
          <div className="md:col-span-7">
            <div className="eyebrow text-foreground/60">Little Palmerhaus</div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              Social Media &amp;
              <br />
              <em>E-commerce Design</em>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed">
              Little Palmerhaus is one of the prominent baby clothing brands in
              Indonesia. My responsibility consists of conceptualizing and
              producing key visual assets for major e-commerce marketing
              campaigns, managing end-to-end post-production for product
              catalogues — including photo editing, color correction, and
              retouching to meet brand standards — as well as supporting
              photography on set, ensuring a seamless workflow from shoot to
              final asset delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/20">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow text-foreground/60">Selected Designs</div>
          <div className="relative mt-10">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {gallery.map((g, i) => (
                  <div key={i} className="relative min-w-0 shrink-0 grow-0 basis-full">
                    <img
                      src={g.url}
                      alt={`Little Palmerhaus campaign ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background md:left-6 md:h-14 md:w-14"
            >
              <span aria-hidden className="text-2xl leading-none">←</span>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background md:right-6 md:h-14 md:w-14"
            >
              <span aria-hidden className="text-2xl leading-none">→</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-10 md:px-10">
          <Link to="/" className="eyebrow hover:italic">
            ← Back to Index
          </Link>
          <a href="mailto:studio@elinvaher.com" className="eyebrow hover:italic">
            studio@elinvaher.com
          </a>
        </div>
      </footer>
    </div>
  );
}
