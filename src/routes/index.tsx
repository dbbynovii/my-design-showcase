import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import portraitAsset from "@/assets/photo_profil.png.asset.json";
import bannerAsset from "@/assets/banner.png.asset.json";
import kidsAsset from "@/assets/kids.png.asset.json";
import gkAsset from "@/assets/gk.png.asset.json";
import cvAsset from "@/assets/Debora_Novianti_CV.pdf.asset.json";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
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
        <div className="flex items-center">
          <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-6 py-4 md:px-10">
        <nav className="flex gap-8">
          <a href="#work" className="text-sm hover:italic">Work</a>
          <a href="#about" className="text-sm hover:italic">About</a>
          <a href="#contact" className="text-sm hover:italic">
            Contact
          </a>
        </nav>
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
              src={portraitAsset.url}
              alt="Portrait of Debora Novianti"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="eyebrow text-foreground/60">About Me</div>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl">
            Debora Novianti
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              An independent graphic designer crafting visual <em>identities</em>,<br className="hidden md:inline" />
              editorial design and marketing materials<br className="hidden md:inline" />
              that combine aesthetics with strategic communication.
            </p>
          </div>

          <dl className="mt-12 space-y-5 border-t border-foreground/20 pt-8">
            {[
              ["Paideia Educational Solutions", "September 2024 – Now"],
              ["Little Palmerhaus", "May 2022 – August 2024"],
              ["Indonesia Media Advertising", "March 2022 – May 2022"],
              ["Levantier Indonesia Group", "November 2020 – January 2021"],
              ["Sinar Mas Land", "February 2020 – May 2020"],
            ].map(([company, date]) => (
              <div
                key={company}
                className="grid grid-cols-[1fr_auto] items-baseline gap-6"
              >
                <dt className="text-lg text-foreground">{company}</dt>
                <dd className="eyebrow text-foreground/60">{date}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <a
              href={cvAsset.url}
              download="Debora_Novianti_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Download My CV
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Graphic Designer"];
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
  const rows: Array<[string, string]> = [
    ["Paideia Educational Solutions x Google", "Brand Collateral Design"],
    ["Stronger Together", "Identity"],
    ["Guru Kreator", "Social Media Design"],
    ["Little Palmerhaus", "Social Media & Ecommerce Design"],
    ["Grab Merchant", "Social Media & Ads Design"],
    ["Town Talk Polish Indonesia", "Social Media Design"],
    ["Learn about Graphic Designer", "Editorial Design"],
    ["Coding For Kids", "Editorial Design"],
  ];
  return (
    <section id="work" className="border-b border-foreground/20">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-serif text-5xl md:text-7xl">
          Selected <em>works</em>
        </h2>

        <div className="mt-12 border-t border-foreground/30">
          {rows.map(([title, disc]) => {
            const linkTo =
              title === "Little Palmerhaus"
                ? "/work/little-palmerhaus"
                : title === "Grab Merchant"
                  ? "/work/grab-merchant"
                : title === "Guru Kreator"
                    ? "/work/guru-kreator"
                    : title === "Town Talk Polish Indonesia"
                      ? "/work/town-talk"
                      : title === "Stronger Together"
                        ? "/work/stronger-together"
                        : title === "Paideia Educational Solutions x Google"
                          ? "/work/paideia-google"
                            : title === "Learn about Graphic Designer"
                            ? "/work/learn-graphic-designer"
                            : title === "Coding For Kids"
                              ? "/work/coding-for-kids"
                              : null;
            const className =
              "group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-foreground/20 py-5 transition-colors hover:bg-foreground hover:text-background md:py-7";
            const inner = (
              <>
                <span className="font-serif text-2xl md:text-4xl">
                  {title}
                  <span className="ml-3 inline-block font-sans text-base italic opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </span>
                <span className="text-right text-sm text-foreground/70 group-hover:text-background/70">
                  {disc}
                </span>
              </>
            );
            return linkTo ? (
              <Link key={title} to={linkTo} className={className}>
                {inner}
              </Link>
            ) : (
              <a key={title} href="#work" className={className}>
                {inner}
              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-serif text-5xl leading-[1.02] md:text-8xl">
              Something to
              <br />
              <em>make together?</em>
            </p>
            <a
              href="mailto:dbbynovii@gmail.com"
              className="mt-10 inline-block font-serif text-3xl italic underline decoration-1 underline-offset-8 hover:no-underline md:text-4xl"
            >
              dbbynovii@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
