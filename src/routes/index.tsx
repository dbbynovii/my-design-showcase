import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import portrait from "@/assets/portrait.jpg";
import bannerAsset from "@/assets/banner.png.asset.json";
import kidsAsset from "@/assets/kids.png.asset.json";
import gkAsset from "@/assets/gk.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Debora Novianti — Independent Graphic Designer" },
      {
        name: "description",
        content:
          "Portfolio of Debora Novianti — independent graphic designer crafting visual identities, editorial design, and marketing materials.",
      },
      { property: "og:title", content: "Debora Novianti — Independent Graphic Designer" },
      {
        property: "og:description",
        content: "Visual identities, editorial design, and marketing materials.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});



function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Masthead />
      <Banner />

      <Hero />
      <Marquee />
      <Selected />
      <Colophon />
    </div>
  );
}

function Banner() {
  const slides = [
    { src: bannerAsset.url, alt: "Koentji — Penjualan Makin Cuan, GrabMerchant" },
    { src: kidsAsset.url, alt: "Little Wear by Little Palmerhaus" },
    { src: gkAsset.url, alt: "Guru Kreator — Instagram posts" },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="border-b border-foreground/20">
      <div className="mx-auto max-w-[1400px] px-6 pt-8 pb-6 md:px-10 md:pt-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, i) => (
              <div key={i} className="relative min-w-0 shrink-0 grow-0 basis-full">
                <div className="aspect-[1920/860] overflow-hidden">
                  <img src={s.src} alt={s.alt} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className="group cursor-pointer p-2"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  selected === i
                    ? "bg-foreground w-6"
                    : "bg-foreground/30 w-2 group-hover:bg-foreground/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Masthead() {
  return (
    <header className="border-b border-foreground/20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:flex sm:flex-wrap sm:justify-between md:px-10">
        <div className="flex min-w-0 items-baseline gap-3">
          <span className="eyebrow">Issue N°014</span>
          <span className="eyebrow hidden text-foreground/50 sm:inline">
            Spring / Summer 2026
          </span>
        </div>
        <nav className="hidden gap-8 md:flex">
          <a href="#work" className="text-sm hover:italic">Work</a>
          <a href="#about" className="text-sm hover:italic">About</a>
          <a href="mailto:studio@elinvaher.com" className="text-sm hover:italic">
            Contact
          </a>
        </nav>
        <span className="eyebrow text-foreground/60 justify-self-end sm:justify-self-auto">
          Stockholm / Remote
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="border-b border-foreground/20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={portrait}
              alt="Portrait of Debora Novianti"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 font-serif italic text-foreground/60">
            Fig. 1 — The designer in her studio, March 2026.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="eyebrow text-foreground/60">The Interview</div>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl">
            On <em>slowness</em>, <br />and paper.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              <span className="font-serif text-4xl italic">I</span> keep a small
              practice on purpose. Two clients a season, sometimes three,
              carried through from first sketch to press check. What that
              buys is time — the kind that lets a mark settle into a shape,
              and a shape into a system.
            </p>
            <p className="text-foreground/70">
              Trained at Konstfack. Formerly of Pentagram (London) and
              Stockholm Design Lab. Teaching typography at Beckmans, one
              afternoon a week. Writing occasionally for Eye and Slanted.
            </p>
          </div>

          <div className="rule mt-10" />
          <div className="mt-6 grid grid-cols-2 gap-y-4 text-sm">
            <span className="text-foreground/60">Clients include</span>
            <span>Aesop · Fogia · Hem · Moderna Museet · Nordiska</span>
            <span className="text-foreground/60">Press</span>
            <span>Eye N°103 · It's Nice That · Slanted 42</span>
            <span className="text-foreground/60">Selected talks</span>
            <span>OFFF 2024 · Typographics NYC · Nicer Tuesdays</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Identity",
    "Editorial",
    "Art Direction",
    "Typography",
    "Print",
    "Exhibition",
    "Packaging",
    "Web",
  ];
  return (
    <div className="overflow-hidden border-b border-foreground/20 py-6">
      <div className="marquee-track flex whitespace-nowrap font-serif text-5xl italic md:text-7xl">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            {t}
            <span className="text-foreground/40">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Selected() {
  const rows = [
    ["Ampersand & Co.", "Identity", "2026"],
    ["Fortune Kato, Vol. II", "Editorial", "2025"],
    ["Vessel — a still life", "Art Direction", "2025"],
    ["Room for a Portrait", "Exhibition", "2024"],
    ["North Atlas", "Print", "2024"],
    ["Paper Almanac", "Typography", "2023"],
    ["Field Notes N°7", "Editorial", "2023"],
    ["Small Objects Co.", "Packaging", "2022"],
  ];
  return (
    <section id="work" className="border-b border-foreground/20">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow text-foreground/60">Feature — Pages 04–47</div>
        <h2 className="mt-4 font-serif text-5xl md:text-7xl">
          Selected <em>works</em>
        </h2>

        <div className="mt-12 border-t border-foreground/30">
          {rows.map(([title, disc, yr]) => (
            <a
              key={title}
              href="#work"
              className="group grid grid-cols-[4rem_1fr_auto] items-baseline gap-4 border-b border-foreground/20 py-5 transition-colors hover:bg-foreground hover:text-background sm:grid-cols-[5rem_1fr_1fr] md:py-7"
            >
              <span className="eyebrow text-foreground/60 group-hover:text-background/60">
                {yr}
              </span>
              <span className="font-serif text-2xl md:text-4xl">
                {title}
                <span className="ml-3 inline-block font-sans text-base italic opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </span>
              <span className="text-right text-sm text-foreground/70 group-hover:text-background/70">
                {disc}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="eyebrow text-background/60">Back Cover</div>
            <p className="mt-6 font-serif text-5xl leading-[1.02] md:text-8xl">
              Something to
              <br />
              <em>make together?</em>
            </p>
            <a
              href="mailto:studio@elinvaher.com"
              className="mt-10 inline-block font-serif text-3xl italic underline decoration-1 underline-offset-8 hover:no-underline md:text-4xl"
            >
              studio@elinvaher.com
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <div className="eyebrow text-background/60">Colophon</div>
            <p className="mt-6 text-sm leading-relaxed text-background/80">
              Set in Instrument Serif &amp; Work Sans. Printed on the web,
              in Stockholm. Photography by the studio. All work © Elin
              Vaher, 2016 — 2026.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-sm">
              <a href="#" className="hover:italic">Instagram</a>
              <a href="#" className="hover:italic">Are.na</a>
              <a href="#" className="hover:italic">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-background/20 pt-6 text-xs text-background/60">
          <span>Issue N°014 — Spring / Summer 2026</span>
          <span>Printed with care</span>
        </div>
      </div>
    </footer>
  );
}
