import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ACHIEVEMENTS } from "@/lib/site-data";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Cybersecurity Club" },
      {
        name: "description",
        content:
          "CTF finals, hackathon wins, published research and awareness drives — the Cybersecurity Club track record.",
      },
      { property: "og:title", content: "Achievements — Cybersecurity Club" },
      {
        property: "og:description",
        content: "Proof that we don't just learn — we compete. Our timeline of wins and milestones.",
      },
    ],
  }),
  component: Achievements,
});

function Achievements() {
  return (
    <>
      <PageHero eyebrow="Achievements" title="Proof That We Don't Just Learn. We Compete." />

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <ol className="relative border-l border-border pl-8">
          {ACHIEVEMENTS.map((a) => (
            <li key={a.title} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.55rem] flex size-7 items-center justify-center rounded-full border border-border bg-background text-sm">
                {a.icon}
              </span>
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-primary">{a.year}</p>
              <h2 className="mt-2 text-xl font-extrabold">{a.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
