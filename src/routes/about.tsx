import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/page-hero";
import { WHAT_WE_DO } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Cybersecurity Club" },
      {
        name: "description",
        content:
          "Our mission, vision and the seven ways we turn student curiosity into real cybersecurity capability.",
      },
      { property: "og:title", content: "About Us — Cybersecurity Club" },
      {
        property: "og:description",
        content: "A community of students where curiosity becomes capability, and capability becomes impact.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Forging the digital defenders of tomorrow."
        intro="Cybersecurity Club at College Name is a community of students united by a passion for cybersecurity — where curiosity becomes capability and capability becomes impact."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Our Mission",
              body: "To promote cybersecurity awareness, practical learning, ethical hacking, research, competitions and industry exposure — making security skills accessible to every student who wants to learn. We believe the best way to understand defense is to understand offense, practiced responsibly.",
            },
            {
              title: "Our Vision",
              body: "To cultivate cybersecurity professionals capable of defending the digital world — students who don't just consume technology, but secure it, shape it and lead it. We envision a generation that treats security as a first principle, not an afterthought.",
            },
          ].map((c) => (
            <article key={c.title} className="rounded-3xl border border-border bg-card p-8 sm:p-10">
              <h2 className="text-2xl font-extrabold">{c.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHead eyebrow="What We Do" title="Seven ways we turn curiosity into capability." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((i) => (
              <article
                key={i.title}
                className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  {i.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
