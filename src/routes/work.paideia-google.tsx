import { createFileRoute, Link } from "@tanstack/react-router";

import mainAsset from "@/assets/paideia-main.png.asset.json";
import supportAsset from "@/assets/paideia-support.png.asset.json";

export const Route = createFileRoute("/work/paideia-google")({
  head: () => ({
    meta: [
      { title: "Paideia x Google — Brand Collateral Design" },
      {
        name: "description",
        content:
          "Visual assets and brand collateral for Paideia Educational Solutions, a Google for Education Partner in Indonesia.",
      },
      {
        property: "og:title",
        content: "Paideia x Google — Brand Collateral Design",
      },
      {
        property: "og:description",
        content:
          "Visual assets supporting brand communication, digital marketing, and educational initiatives.",
      },
      { property: "og:image", content: mainAsset.url },
      { name: "twitter:image", content: mainAsset.url },
    ],
  }),
  component: PaideiaGoogle,
});

function PaideiaGoogle() {
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
              alt="Paideia x Google campaign key visual"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
          <div className="md:col-span-7">
            <div className="eyebrow text-foreground/60">Paideia Educational Solutions</div>
            <div className="eyebrow mt-1 text-foreground/60">
              Google for Education Partner
            </div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              Paideia x
              <br />
              <em>Google</em>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed">
              Paideia Educational Solutions is a Google for Education Partner
              committed to advancing educational transformation in Indonesia
              through technology. By providing digital solutions, professional
              development programs, and training for educators, Paideia
              empowers schools and teachers to create more interactive,
              collaborative, and meaningful learning experiences.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              As a member of the design team, I contributed to the development
              of a wide range of visual assets that supported brand
              communication, digital marketing campaigns, and educational
              initiatives reaching teachers and schools across Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/20">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow text-foreground/60">Selected Designs</div>
          <div className="mt-10 overflow-hidden">
            <img
              src={supportAsset.url}
              alt="Paideia x Google branded tote bag collateral"
              loading="lazy"
              className="h-auto w-full object-cover"
            />
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
