import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { EVENTS, EVENT_FILTERS } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Cybersecurity Club" },
      {
        name: "description",
        content:
          "CTFs, workshops, hackathons and seminars hosted by the Cybersecurity Club. Browse upcoming and past events.",
      },
      { property: "og:title", content: "Events — Cybersecurity Club" },
      {
        property: "og:description",
        content: "Where curiosity meets competition — our full calendar of CTFs, bootcamps and hackathons.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  const [filter, setFilter] = useState("All");
  const featured = EVENTS.find((e) => e.featured)!;
  const list = useMemo(
    () => (filter === "All" ? EVENTS : EVENTS.filter((e) => e.type === filter)),
    [filter],
  );

  return (
    <>
      <PageHero eyebrow="Events" title="Where Curiosity Meets Competition." />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <article className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
          <img
            src={featured.image}
            alt={featured.title}
            className="h-64 w-full object-cover lg:h-full"
          />
          <div className="p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.6rem] tracking-[0.15em] text-accent-foreground uppercase">
                {featured.type}
              </span>
              <span className="rounded-full bg-primary px-3 py-1 font-mono text-[0.6rem] tracking-[0.15em] text-primary-foreground uppercase">
                Featured
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold">{featured.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {featured.desc}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 font-mono text-[0.68rem] tracking-wider text-muted-foreground uppercase">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-3.5" /> {featured.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5" /> {featured.place}
              </span>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Register <ArrowRight className="size-4" />
            </Link>
          </div>
        </article>

        <div className="mt-14 flex flex-wrap gap-2">
          {EVENT_FILTERS.map((f) => (
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((e) => (
            <article
              key={e.slug}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative">
                <img src={e.image} alt={e.title} loading="lazy" className="h-44 w-full object-cover" />
                <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 font-mono text-[0.6rem] tracking-[0.15em] text-accent-foreground uppercase backdrop-blur">
                  {e.type}
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] tracking-[0.15em] text-muted-foreground uppercase">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3" /> {e.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3" /> {e.place}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                >
                  View Details <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">No events in this category yet.</p>
        )}
      </section>
    </>
  );
}
