import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import heroImage from "@/assets/cyber-network.jpg";
import { CountUp } from "@/components/count-up";
import { SectionHead } from "@/components/page-hero";
import {
  ACHIEVEMENTS,
  CLUB_EMAIL,
  DOMAINS,
  DOMAIN_TAGS,
  EVENTS,
  LAB_ITEMS,
  MONITOR_METRICS,
  PARTNER_GROUPS,
  STATS,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cybersecurity Club — Think. Hack. Defend." },
      {
        name: "description",
        content:
          "Student cybersecurity club for ethical hacking, forensics, AI security, CTFs and research. Explore our events, team and resources.",
      },
      { property: "og:title", content: "Cybersecurity Club — Think. Hack. Defend." },
      {
        property: "og:description",
        content:
          "Building the next generation of digital defenders through hands-on labs, competitions and real research.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = EVENTS.find((e) => e.featured)!;
  const upcoming = EVENTS.filter((e) => !e.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="grid-bg border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-cyan" />
              <span className="eyebrow">Official Cybersecurity Club · College Name</span>
            </p>
            <h1 className="mt-7 text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
              Think.Hack.
              <br />
              <span className="text-gradient">Defend.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Building the next generation of cybersecurity minds. We bring together students
              passionate about cybersecurity, ethical hacking, digital forensics, AI security, CTFs,
              research and innovation — forging the next generation of digital defenders.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                Explore the Club <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
              >
                Join the Community
              </Link>
            </div>
            <Link
              to="/events"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <CalendarDays className="size-4 text-primary" /> View Our Events
              <ArrowRight className="size-4 text-primary" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-xl shadow-primary/5">
            <img
              src={heroImage}
              alt="Abstract cybersecurity network visualization forming a shield"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div className="flex items-center justify-between px-3 pt-3 pb-1 font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500" /> network · secure
              </span>
              <span>nodes · 54</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid divide-border overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {STATS.map((s) => (
            <div key={s.label} className="border-b border-border p-8 text-center lg:border-b-0">
              <p className="text-4xl font-extrabold sm:text-5xl">
                <CountUp to={s.value} suffix="+" />
              </p>
              <p className="mt-3 font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHead
              eyebrow="About the Club"
              title={
                <>
                  More Than a Club.{" "}
                  <span className="text-muted-foreground">A Cybersecurity Community.</span>
                </>
              }
              intro="We exist to make cybersecurity accessible, practical and exciting — turning curiosity into capability through hands-on labs, competitions and real research that prepares students for the threats of tomorrow."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {DOMAIN_TAGS.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Discover Our Mission <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Abstract cybersecurity visualization"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-3xl border border-border object-cover"
            />
            <div className="absolute -bottom-5 left-5 flex gap-3">
              {[
                { k: "est.", v: "2023" },
                { k: "status", v: "Active" },
              ].map((b) => (
                <div
                  key={b.k}
                  className="rounded-xl border border-border bg-background px-4 py-3 shadow-sm"
                >
                  <p className="font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {b.k}
                  </p>
                  <p className="text-sm font-bold">{b.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHead
          eyebrow="Cybersecurity Domains"
          title="Explore the Attack Surface."
          intro="Six pillars of modern security — each a discipline we train, compete and research in."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d) => (
            <article
              key={d.n}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-primary">{d.n}</p>
              <h3 className="mt-5 text-lg font-bold">{d.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Explore <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Events"
              title="Where Curiosity Meets Competition."
              intro="CTFs, workshops, hackathons and seminars — built to turn theory into instinct."
            />
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold"
            >
              All events <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            <article className="overflow-hidden rounded-3xl border border-border bg-card lg:col-span-3">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.6rem] tracking-[0.15em] text-accent-foreground uppercase">
                    {featured.type}
                  </span>
                  <span className="rounded-full bg-primary px-3 py-1 font-mono text-[0.6rem] tracking-[0.15em] text-primary-foreground uppercase">
                    Featured
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-extrabold">{featured.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{featured.desc}</p>
                <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-[0.68rem] tracking-wider text-muted-foreground uppercase">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" /> {featured.place}
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Register <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>

            <div className="grid gap-4 lg:col-span-2">
              {upcoming.map((e) => (
                <article
                  key={e.slug}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="size-24 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.6rem] tracking-[0.15em] text-muted-foreground uppercase">
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-accent-foreground">
                        {e.type}
                      </span>
                      <span>{e.date}</span>
                      <span>· {e.place}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold">{e.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {e.desc}
                    </p>
                    <Link
                      to="/events"
                      className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-primary"
                    >
                      View Details <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cyber lab */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHead
          eyebrow="The Cyber Lab"
          title="Inside the Cyber Lab."
          intro="A snapshot of what happens behind the scenes — training, research and the relentless practice of defense."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAB_ITEMS.map((i) => (
            <article key={i.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="text-2xl" aria-hidden="true">
                {i.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Activity monitor */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Security Activity Monitor</p>
                <h2 className="mt-3 text-2xl font-extrabold">Club Operations · Live View</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> operational
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {MONITOR_METRICS.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {m.tag}
                  </p>
                  <p className="mt-2 text-3xl font-extrabold">
                    <CountUp to={m.value} />
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                Throughput · last 24h
              </p>
              <div className="mt-4 flex h-24 items-end gap-1.5">
                {[
                  32, 48, 40, 62, 55, 71, 60, 84, 66, 78, 58, 92, 70, 61, 88, 74, 52, 66, 80, 59,
                  73, 45, 68, 57,
                ].map((h, idx) => (
                  <span
                    key={idx}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t bg-primary/25"
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * Visual representation only — not real-time telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHead
          eyebrow="Achievements"
          title="Proof That We Don't Just Learn. We Compete."
          intro="A track record built in competitions, research and community impact."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <article key={a.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="text-2xl" aria-hidden="true">
                  {a.icon}
                </span>
                <span className="font-mono text-[0.65rem] tracking-[0.18em] text-primary">
                  {a.year}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </article>
          ))}
        </div>
        <Link
          to="/achievements"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold"
        >
          View full timeline <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Collaborations */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHead
            eyebrow="Collaborations"
            title="Stronger Together."
            intro="We partner with industry, academia and technology communities to give members real-world exposure."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PARTNER_GROUPS.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-base font-bold">{g.title}</h3>
                <ul className="mt-5 grid gap-2.5">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-muted-foreground"
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
            to="/partners"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Become a partner <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="grid-bg">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
          <p className="eyebrow">Join the Club</p>
          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Ready to Enter the Arena?</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you're a beginner or a seasoned player, there's a place for you. Come build,
            break and defend with us.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
            >
              Send Message <ArrowRight className="size-4" />
            </Link>
            <a
              href={`mailto:${CLUB_EMAIL}`}
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold"
            >
              {CLUB_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
