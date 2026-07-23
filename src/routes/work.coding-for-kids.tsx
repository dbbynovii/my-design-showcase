import { createFileRoute, Link } from "@tanstack/react-router";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import mainAsset from "@/assets/cfk-main.png.asset.json";
import cfk2 from "@/assets/cfk-2.png.asset.json";
import cfk3 from "@/assets/cfk-3.png.asset.json";
import cfk4 from "@/assets/cfk-4.png.asset.json";

export const Route = createFileRoute("/work/coding-for-kids")({
  head: () => ({
    meta: [
      { title: "Coding For Kids — Illustration Book" },
      {
        name: "description",
        content:
          "Illustration book introducing coding logic for children through Scratch.",
      },
      { property: "og:title", content: "Coding For Kids — Illustration Book" },
      {
        property: "og:description",
        content:
          "A book exploring the fundamentals of coding logic for children through Scratch.",
      },
      { property: "og:image", content: mainAsset.url },
      { name: "twitter:image", content: mainAsset.url },
    ],
  }),
  component: CodingForKids,
});

function CodingForKids() {
  const gallery = [cfk2, cfk3, cfk4];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/20">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-10">
          <Link to="/" className="eyebrow hover:italic">
            ← Back to Index
          </Link>
          <nav className="flex gap-8">
            <Link to="/" hash="work" className="text-sm hover:italic">Work</Link>
            <Link to="/" hash="about" className="text-sm hover:italic">About</Link>
            <Link to="/" hash="contact" className="text-sm hover:italic">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-foreground/20">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10 md:pt-14">
          <div className="overflow-hidden">
            <img
              src={mainAsset.url}
              alt="Coding For Kids — book spread key visual"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div>
            <div className="eyebrow text-foreground/60">Coding For Kids</div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              <em>Illustration Book</em>
            </h1>
          </div>
          <div className="mt-12 md:mt-16">
            <p className="text-lg leading-relaxed">
              This book explores the fundamentals of coding logic for children through Scratch.<br className="hidden md:inline" />
              It introduces basic programming concepts using visual blocks, interactive activities,<br className="hidden md:inline" />
              and engaging projects to develop logical thinking, creativity, and problem-solving skills.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/20">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow text-foreground/60">Selected Spreads</div>
          <div className="mt-10 flex items-center gap-4 md:gap-6">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground transition hover:bg-foreground hover:text-background md:h-14 md:w-14"
            >
              <span aria-hidden className="text-2xl leading-none">←</span>
            </button>
            <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {gallery.map((g, i) => (
                  <div key={i} className="relative min-w-0 shrink-0 grow-0 basis-full">
                    <img
                      src={g.url}
                      alt={`Coding For Kids spread ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground transition hover:bg-foreground hover:text-background md:h-14 md:w-14"
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
        </div>
      </footer>
    </div>
  );
}
