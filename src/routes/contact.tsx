import { createFileRoute } from "@tanstack/react-router";
import { Building2, Github, Instagram, Linkedin, Mail, MessageCircle, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { CLUB_EMAIL, CLUB_NAME, COLLEGE_NAME } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cybersecurity Club" },
      {
        name: "description",
        content:
          "Questions, partnership ideas or want to join the Cybersecurity Club? Send us a message — we respond fast.",
      },
      { property: "og:title", content: "Contact — Cybersecurity Club" },
      {
        property: "og:description",
        content: "Ready to enter the arena? Reach out to the Cybersecurity Club team.",
      },
    ],
  }),
  component: Contact,
});

const SOCIALS = [
  { label: "GitHub", Icon: Github },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Twitter", Icon: Twitter },
  { label: "Instagram", Icon: Instagram },
  { label: "Discord", Icon: MessageCircle },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to Enter the Arena?"
        intro="Have a question, partnership idea or want to join? Reach out — we respond fast."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-5 lg:px-8">
        <form
          className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:col-span-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@college.edu" />
          </div>
          <div className="mt-5">
            <Field label="Subject" name="subject" placeholder="What's this about?" />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="eyebrow block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell us more…"
              className="mt-2.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
            />
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
          >
            Send Message <Send className="size-4" />
          </button>
          {sent && (
            <p className="mt-4 text-sm font-medium text-emerald-600" role="status">
              Thanks — your message has been queued. We'll get back to you shortly.
            </p>
          )}
        </form>

        <aside className="lg:col-span-2">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <h2 className="text-lg font-bold">Get in touch</h2>
            <ul className="mt-6 grid gap-5">
              <li className="flex gap-3.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Building2 className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{COLLEGE_NAME}</span>
                  <span className="block text-sm text-muted-foreground">{CLUB_NAME}</span>
                </span>
              </li>
              <li className="flex gap-3.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Mail className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Email</span>
                  <a href={`mailto:${CLUB_EMAIL}`} className="text-sm text-primary">
                    {CLUB_EMAIL}
                  </a>
                </span>
              </li>
            </ul>
            <div className="mt-8 flex gap-2">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
      />
    </div>
  );
}
