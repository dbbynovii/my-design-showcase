import { createFileRoute, Link } from "@tanstack/react-router";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import mainAsset from "@/assets/lag-main.png.asset.json";
import lag2 from "@/assets/lag-2.png.asset.json";
import lag3 from "@/assets/lag-3.png.asset.json";
import lag4 from "@/assets/lag-4.png.asset.json";
import lag5 from "@/assets/lag-5.png.asset.json";
import lag6 from "@/assets/lag-6.png.asset.json";

export const Route = createFileRoute("/work/learn-graphic-designer")({
  head: () => ({
    meta: [
      { title: "Learn about Graphic Designer — Illustration Book" },
      {
        name: "description",
        content:
          "Illustration book exploring the essential concepts of graphic design.",
      },
      { property: "og:title", content: "Learn about Graphic Designer — Illustration Book" },
      {
        property: "og:description",
        content:
          "A book exploring the essential concepts of graphic design and visual communication.",
      },
      { property: "og:image", content: mainAsset.url },
      { name: "twitter:image", content: mainAsset.url },
    ],
  }),
  component: LearnGraphicDesigner,
});

function LearnGraphicDesigner() {
  const gallery = [lag2, lag3, lag4, lag5, lag6];
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
              alt="Learn about Graphic Designer — book spreads"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div>
            <div className="eyebrow text-foreground/60">Illustration Book</div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              <em>Learn about Graphic Designer</em>
            </h1>
          </div>
          <div className="mt-12 md:mt-16">
            <p className="text-lg leading-relaxed">
              This book explores the essential concepts of graphic design,<br className="hidden md:inline" />
              helping readers understand its role in visual communication<br className="hidden md:inline" />
              and creative problem-solving.
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
                      alt={`Learn about Graphic Designer spread ${i + 1}`}
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
