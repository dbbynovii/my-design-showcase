import { createFileRoute, Link } from "@tanstack/react-router";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import mainAsset from "@/assets/tt-main.png.asset.json";
import tt1 from "@/assets/tt-1.png.asset.json";
import tt2 from "@/assets/tt-2.png.asset.json";
import tt3 from "@/assets/tt-3.png.asset.json";
import tt4 from "@/assets/tt-4.png.asset.json";
import tt5 from "@/assets/tt-5.png.asset.json";
import tt6 from "@/assets/tt-6.png.asset.json";

export const Route = createFileRoute("/work/town-talk")({
  head: () => ({
    meta: [
      { title: "Town Talk Polish Indonesia — Social Media Design" },
      {
        name: "description",
        content:
          "Social media content and visual design for Town Talk Polish Indonesia, distributed by PT Levantier Indonesia.",
      },
      {
        property: "og:title",
        content: "Town Talk Polish Indonesia — Social Media Design",
      },
      {
        property: "og:description",
        content:
          "Content planning, photo editing, motion graphics, and brand identity for Town Talk Polish Indonesia.",
      },
      { property: "og:image", content: mainAsset.url },
      { name: "twitter:image", content: mainAsset.url },
    ],
  }),
  component: TownTalk,
});

function TownTalk() {
  const gallery = [tt1, tt2, tt3, tt4, tt5, tt6];
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
            <a href="mailto:studio@elinvaher.com" className="text-sm hover:italic">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-foreground/20">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10 md:pt-14">
          <div className="overflow-hidden">
            <img
              src={mainAsset.url}
              alt="Town Talk Polish Indonesia key visual"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
          <div className="md:col-span-7">
            <div className="eyebrow text-foreground/60">Town Talk Polish Indonesia</div>
            <div className="eyebrow mt-1 text-foreground/60">
              PT Levantier Indonesia
            </div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              <em>Social Media</em>
              <br />
              Town Talk Polish
              <br />
              Indonesia
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed">
              PT Levantier Indonesia is the authorized distributor of Town Talk
              Polish in Indonesia. My responsibilities include planning social
              media content for Town Talk Polish Indonesia, undertake photo
              editing, retouching, and digital imaging to produce visual
              content, created basic GIFs and motion graphics to increase
              audience engagement across digital platforms and also
              collaborated with team to develop creative concepts and maintain
              consistent brand identity.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/20">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow text-foreground/60">Selected Designs</div>
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
                      alt={`Town Talk Polish Indonesia campaign ${i + 1}`}
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
          <a href="mailto:studio@elinvaher.com" className="eyebrow hover:italic">
            studio@elinvaher.com
          </a>
        </div>
      </footer>
    </div>
  );
}
