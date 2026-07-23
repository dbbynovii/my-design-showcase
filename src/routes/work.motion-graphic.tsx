import { createFileRoute, Link } from "@tanstack/react-router";

import videoAsset from "@/assets/me-taylor-swift.mp4.asset.json";

export const Route = createFileRoute("/work/motion-graphic")({
  head: () => ({
    meta: [
      { title: "ME — Taylor Swift — Motion Graphic" },
      {
        name: "description",
        content:
          "Motion graphic project set to 'ME' by Taylor Swift, exploring rhythm, typography, and color in motion.",
      },
      { property: "og:title", content: "ME — Taylor Swift — Motion Graphic" },
      {
        property: "og:description",
        content: "Motion graphic project set to 'ME' by Taylor Swift.",
      },
    ],
  }),
  component: MotionGraphic,
});

function MotionGraphic() {
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
            <video
              src={videoAsset.url}
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div>
            <div className="eyebrow text-foreground/60">Motion Graphic</div>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
              <em>ME</em> — Taylor Swift
            </h1>
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
