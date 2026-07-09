import { createFileRoute, Link } from "@tanstack/react-router";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import mainAsset from "@/assets/gm-main.png.asset.json";
import gm1 from "@/assets/gm-1.png.asset.json";
import gm2 from "@/assets/gm-2.png.asset.json";
import gm3 from "@/assets/gm-3.png.asset.json";

export const Route = createFileRoute("/work/grab-merchant")({
  head: () => ({
    meta: [
      { title: "Grab Merchant — Social Media & E-commerce Design" },
      {
        name: "description",
        content:
          "Social media and e-commerce visual design for Grab Merchant, produced at Indonesia Media Advertising.",
      },
      {
        property: "og:title",
        content: "Grab Merchant — Social Media & E-commerce Design",
      },
      {
        property: "og:description",
        content:
          "Visual content, e-commerce banners, and Instagram assets for Grab Merchant.",
      },
      { property: "og:image", content: mainAsset.url },
      { name: "twitter:image", content: mainAsset.url },
    ],
  }),
  component: GrabMerchant,
});

function GrabMerchant() {
  const gallery = [gm1, gm2, gm3];
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
              alt="Grab Merchant campaign key visual"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div>
            <div className="eyebrow text-foreground/60">Grab Merchant</div>
            <div className="eyebrow mt-1 text-foreground/60">
              Agency: Indonesia Media Advertising
            </div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              Social Media &amp;
              <br />
              <em>E-commerce Design</em>
            </h1>
          </div>
          <div className="mt-12 md:mt-16">
            <p className="text-lg leading-relaxed">
              Indonesia Media Advertising is one of Indonesia's leading advertising agencies.<br className="hidden md:inline" />
              Since its establishment in 2009 in Jakarta, the agency has been delivering creative solutions<br className="hidden md:inline" />
              tailored to the Indonesian market.<br className="hidden md:inline" />
              My responsibilities consist of designed visual content for Grab Merchant's social media channels,<br className="hidden md:inline" />
              created a diverse range of visual assets including e-commerce banners, Instagram feed posts,<br className="hidden md:inline" />
              and Instagram stories, to drive merchant engagement and campaign goals.
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
                      alt={`Grab Merchant campaign ${i + 1}`}
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
