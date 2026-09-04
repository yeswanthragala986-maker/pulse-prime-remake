import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";
import { PageHero, SectionHead } from "@/components/page-hero";
import { TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "The Team — Cybersecurity Club" },
      {
        name: "description",
        content:
          "Meet the core team driving the Cybersecurity Club — leadership, technical, research, events and community leads.",
      },
      { property: "og:title", content: "The Team — Cybersecurity Club" },
      {
        property: "og:description",
        content: "The people behind the defense — a core team driving technical training and community growth.",
      },
    ],
  }),
  component: Teams,
});

function Teams() {
  return (
    <>
      <PageHero
        eyebrow="The Team"
        title="The people behind the defense."
        intro="A dedicated core team driving the club's mission — from technical training to community growth."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHead eyebrow="Core Team" title="Leadership & Leads" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl border border-border bg-card p-7 text-center transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-accent font-mono text-lg font-semibold tracking-widest text-accent-foreground">
                {m.initials}
              </span>
              <h3 className="mt-5 text-base font-bold">{m.name}</h3>
              <p className="mt-1 font-mono text-[0.62rem] tracking-[0.18em] text-primary uppercase">
                {m.role}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>
              <div className="mt-5 flex justify-center gap-2">
                <a
                  href="#"
                  aria-label={`${m.name} on GitHub`}
                  className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="size-3.5" />
                </a>
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
