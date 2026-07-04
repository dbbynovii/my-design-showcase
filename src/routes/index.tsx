import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import bannerAsset from "@/assets/banner.png.asset.json";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elin Vaher — Independent Designer, Issue N°014" },
      {
        name: "description",
        content:
          "Portfolio of Elin Vaher — independent designer working in identity, editorial, and art direction. Selected works 2019–2026.",
      },
      { property: "og:title", content: "Elin Vaher — Independent Designer" },
      {
        property: "og:description",
        content: "Selected works in identity, editorial, and art direction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const works = [
  {
    n: "01",
    title: "Ampersand & Co.",
    client: "Ampersand Studio",
    year: "2026",
    discipline: "Identity",
    image: work01,
    span: "lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    n: "02",
    title: "Fortune Kato, Vol. II",
    client: "Kato Press",
    year: "2025",
    discipline: "Editorial",
    image: work02,
    span: "lg:col-span-5",
    ratio: "aspect-[5/4]",
  },
  {
    n: "03",
    title: "Vessel — a still life",
    client: "Objet Étude",
    year: "2025",
    discipline: "Art Direction",
    image: work03,
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    n: "04",
    title: "Room for a Portrait",
    client: "Galerie Nord",
    year: "2024",
    discipline: "Exhibition",
    image: work04,
    span: "lg:col-span-12",
    ratio: "aspect-[16/9]",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Masthead />
      <Banner />

      <Hero />
      <Marquee />
      <Selected />
      <About />
      <Index_ />
      <Colophon />
    </div>
  );
}

function Banner() {
  return (
    <section className="border-b border-foreground/20">
      <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-10 md:pt-10">
        <div className="overflow-hidden aspect-[1920/860]">
          <img
            src={bannerAsset.url}
            alt="Koentji — Penjualan Makin Cuan, GrabMerchant"
            className="h-full w-full object-cover"
          />
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
          <a href="#index" className="text-sm hover:italic">Index</a>
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
    <section className="border-b border-foreground/20">
      <div className="mx-auto max-w-[1400px] px-6 pt-12 pb-16 md:px-10 md:pt-20 md:pb-24">
        <div className="eyebrow text-foreground/60">The Cover — Portrait of a Practice</div>

        <h1 className="rise-in mt-8 font-serif text-[15vw] leading-[0.88] tracking-[-0.02em] md:text-[10.5rem]">
          Elin
          <br />
          <span className="italic">Vaher</span>
          <span className="align-top text-3xl md:text-5xl"> ✳</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="serif col-span-1 text-2xl leading-[1.15] md:col-span-7 md:text-4xl">
            An independent designer building quiet, considered
            <em> identities</em>, editorial systems, and art direction for
            studios, publishers, and small institutions.
          </p>
          <div className="col-span-1 md:col-span-4 md:col-start-9">
            <div className="rule mb-4" />
            <dl className="grid grid-cols-2 gap-y-3 text-sm">
              <dt className="text-foreground/60">Practice since</dt>
              <dd>2016</dd>
              <dt className="text-foreground/60">Available</dt>
              <dd>Q3 — 2026</dd>
              <dt className="text-foreground/60">Currently</dt>
              <dd>Two projects in press</dd>
              <dt className="text-foreground/60">Recognition</dt>
              <dd>TDC · D&AD · Brand New</dd>
            </dl>
            <div className="rule mt-4" />
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
  return (
    <section id="work" className="border-b border-foreground/20">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="eyebrow text-foreground/60">Feature — Pages 04–47</div>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl">
              Selected <em>works</em>
            </h2>
          </div>
          <div className="hidden max-w-xs text-right text-sm text-foreground/60 md:block">
            Twelve years, forty-odd projects. These are the four I return to.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-12">
          {works.map((w) => (
            <article key={w.n} className={`group ${w.span}`}>
              <div className="mb-4 flex items-baseline justify-between">
                <span className="eyebrow text-foreground/60">№ {w.n}</span>
                <span className="eyebrow text-foreground/60">{w.year}</span>
              </div>
              <div className={`overflow-hidden bg-muted ${w.ratio}`}>
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">
                    {w.client} — {w.discipline}
                  </p>
                </div>
                <span className="mt-2 font-serif italic underline decoration-1 underline-offset-4 group-hover:no-underline">
                  Read →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-foreground/20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={portrait}
              alt="Portrait of Elin Vaher"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 font-serif italic text-foreground/60">
            Fig. 1 — The designer in her Södermalm studio, March 2026.
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

function Index_() {
  const rows = [
    ["014", "Ampersand & Co.", "Identity, Print", "2026"],
    ["013", "Fortune Kato, Vol. II", "Editorial", "2025"],
    ["012", "Vessel", "Art Direction", "2025"],
    ["011", "Room for a Portrait", "Exhibition", "2024"],
    ["010", "Notes on Grain", "Type Design", "2024"],
    ["009", "Halva Papper", "Packaging", "2023"],
    ["008", "The Long Winter", "Book", "2023"],
    ["007", "Fogia — Reissue", "Identity", "2022"],
  ];
  return (
    <section id="index" className="border-b border-foreground/20">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="eyebrow text-foreground/60">Index — Rear Pages</div>
        <h2 className="mt-4 font-serif text-5xl md:text-7xl">
          The <em>archive</em>
        </h2>

        <div className="mt-12 border-t border-foreground/30">
          {rows.map(([n, title, disc, yr]) => (
            <a
              key={n}
              href="#work"
              className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-foreground/20 py-5 transition-colors hover:bg-foreground hover:text-background sm:grid-cols-[4rem_1fr_1fr_5rem] md:py-7"
            >
              <span className="eyebrow text-foreground/60 group-hover:text-background/60">
                № {n}
              </span>
              <span className="font-serif text-2xl md:text-4xl">
                {title}
                <span className="ml-3 inline-block font-sans text-base italic opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </span>
              <span className="hidden text-sm text-foreground/70 group-hover:text-background/70 sm:block">
                {disc}
              </span>
              <span className="text-right text-sm">{yr}</span>
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
