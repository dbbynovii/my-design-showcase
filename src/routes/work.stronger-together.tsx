import { createFileRoute, Link } from "@tanstack/react-router";

import brochureAsset from "@/assets/st-brochure-stack.png.asset.json";
import flatlayAsset from "@/assets/st-flatlay.png.asset.json";

export const Route = createFileRoute("/work/stronger-together")({
  head: () => ({
    meta: [
      { title: "Stronger Together — Brand Identity" },
      {
        name: "description",
        content:
          "Brand identity for Stronger Together, the 2025–2026 academic year theme at Amman Academy.",
      },
      { property: "og:title", content: "Stronger Together — Brand Identity" },
      {
        property: "og:description",
        content:
          "Brand identity system for Amman Academy's 2025–2026 academic year theme.",
      },
      { property: "og:image", content: brochureAsset.url },
      { name: "twitter:image", content: brochureAsset.url },
    ],
  }),
  component: StrongerTogether,
});

function StrongerTogether() {
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

      {/* Top hero image: brochure stack */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 pt-[5px] md:px-10 md:pt-[8px]">
          <div className="overflow-hidden">
            <img
              src={brochureAsset.url}
              alt="Stronger Together brand identity guidelines brochure stack"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brand Identity intro */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="eyebrow text-foreground/60">Stronger Together</div>
              <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
                Brand <em>Identity</em>
              </h1>
            </div>
            <div className="md:col-span-7 space-y-5 text-lg leading-relaxed">
              <p>
                Stronger Together is the 2025–2026 academic year theme in Amman
                Academy school. This academic year calls students into a new
                chapter of deeper unity, intentional growth, and shared purpose.
                The theme “Stronger Together” is a reminder that lasting
                transformation is built — not in isolation — but in community.
              </p>
              <p>
                With clarity of purpose and intentional actions, we begin to
                identify the pillars we must strengthen together: our values,
                our systems, our culture, and our relationships. Once these are
                clearly defined and shared, we can build a strong foundation
                and — together.
              </p>
              <p>
                In every challenge, every achievement, every step forward, we
                remain Stronger Together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept / Design */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="eyebrow text-foreground/60">Concept</div>
              <h2 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
                <em>Design</em>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-lg leading-relaxed">
              <p>
                The logo showcases four interlocking hands, symbolizing unity
                and collaboration.
              </p>
              <p>
                Each hand represents one of the four pillars of transformation
                we’ve been cultivating since January 2025: Strategic and
                Operational Management, Academic Management, Non-academic
                Management, and Financial &amp; Regulatory Compliance.
              </p>
              <p>
                Just as these hands are intricately united, achieving these
                goals demands a collective effort—advancing together, hand in
                hand. This logo stands as a profound reminder that true
                transformation can only be realized when individuals come
                together, united by a common purpose and shared vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom flatlay image */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
          <img
            src={flatlayAsset.url}
            alt="Stronger Together apparel and stationery flat lay mockup"
            className="h-auto w-full object-cover"
          />
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
