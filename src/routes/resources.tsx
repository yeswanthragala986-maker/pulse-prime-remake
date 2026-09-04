import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { RESOURCES, RESOURCE_FILTERS } from "@/lib/site-data";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Cybersecurity Club" },
      {
        name: "description",
        content:
          "A curated hub of cybersecurity learning resources — fundamentals, ethical hacking, CTF, forensics, crypto and AI security.",
      },
      { property: "og:title", content: "Resources — Cybersecurity Club" },
      {
        property: "og:description",
        content: "The arsenal to get started — curated books, labs and practice archives by specialty.",
      },
    ],
  }),
  component: Resources,
});

const LEVEL_STYLES: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-rose-50 text-rose-700",
};

function Resources() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () => (filter === "All" ? RESOURCES : RESOURCES.filter((r) => r.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The arsenal to get started."
        intro="A curated hub of learning resources — from fundamentals to advanced specialties."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {RESOURCE_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <a
              key={r.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.58rem] tracking-[0.15em] text-accent-foreground uppercase">
                  {r.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[0.58rem] tracking-[0.15em] uppercase ${LEVEL_STYLES[r.level]}`}
                >
                  {r.level}
                </span>
              </div>
              <h2 className="mt-5 text-base font-bold">{r.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Open resource{" "}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
