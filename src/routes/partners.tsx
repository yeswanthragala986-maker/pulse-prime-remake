import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PARTNER_GROUPS } from "@/lib/site-data";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Collaborations — Cybersecurity Club" },
      {
        name: "description",
        content:
          "Industry, academic and community partners who give Cybersecurity Club members real-world exposure.",
      },
      { property: "og:title", content: "Collaborations — Cybersecurity Club" },
      {
        property: "og:description",
        content: "Stronger together — our industry, academic and technology community partnerships.",
      },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Collaborations"
        title="Stronger Together."
        intro="We collaborate with industry, academia and technology communities to give members real-world exposure and opportunity."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {PARTNER_GROUPS.map((g) => (
            <div key={g.title} className="rounded-3xl border border-border bg-card p-8">
              <h2 className="text-base font-bold">{g.title}</h2>
              <ul className="mt-6 grid gap-2.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          * Partner placeholders shown above — replace with real organizations before launch.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Become a partner <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
