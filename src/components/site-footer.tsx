import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { CLUB_EMAIL, CLUB_NAME, COLLEGE_NAME, NAV_LINKS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Shield className="size-4.5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.95rem] font-extrabold">{CLUB_NAME}</span>
              <span className="block font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                {COLLEGE_NAME}
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Building the next generation of cybersecurity minds — through labs, competitions and
            research.
          </p>
          <a
            href={`mailto:${CLUB_EMAIL}`}
            className="mt-4 inline-block font-mono text-xs tracking-wider text-primary"
          >
            {CLUB_EMAIL}
          </a>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-7xl px-5 py-5 font-mono text-[0.65rem] tracking-[0.15em] text-muted-foreground uppercase lg:px-8">
          © {new Date().getFullYear()} {CLUB_NAME} · {COLLEGE_NAME}
        </p>
      </div>
    </footer>
  );
}
