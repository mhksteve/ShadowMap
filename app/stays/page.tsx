import Link from "next/link";
import { ArrowRight, ExternalLink, MapPinned, ShieldCheck, Waves } from "lucide-react";
import { demoStays } from "@/lib/demo-data";

const filters = ["Boutique", "Unique", "Family", "Remote Work", "Romantic", "Pet-Friendly"];

export default function StaysPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="mx-auto w-full max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-charcoal/10 pb-5">
          <Link href="/" className="font-serif text-3xl font-semibold tracking-normal">
            Shadow Map
          </Link>
          <Link
            href="/guide/demo-host"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-charcoal/20 px-4 text-sm font-medium transition hover:border-charcoal hover:bg-charcoal hover:text-cream"
          >
            Already booked
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        <header className="grid gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brass">
              Find a place with proof
            </p>
            <h1 className="mt-5 font-serif text-[clamp(3.9rem,9vw,8rem)] font-semibold leading-[0.86] text-ink">
              Book the stay that comes with the honest map.
            </h1>
          </div>
          <div className="self-end">
            <p className="max-w-2xl text-lg leading-8 text-charcoal/70">
              Search stays where the host&apos;s local knowledge is part of the
              listing: what is worth it, what to avoid, what is nearby, and what
              recent guests quietly confirmed.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="rounded-full border border-charcoal/10 bg-linen px-4 py-2 text-sm font-semibold transition hover:border-charcoal hover:bg-charcoal hover:text-cream"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          {demoStays.map((stay) => (
            <article
              key={stay.id}
              className="group rounded-[1.75rem] border border-charcoal/10 bg-white/50 p-5 transition hover:-translate-y-1 hover:border-charcoal/25 hover:shadow-editorial"
            >
              <Link href={`/stays/${stay.id}` as `/stays/${string}`} className="block">
                <div
                  className="flex h-64 flex-col justify-between overflow-hidden rounded-[1.25rem] bg-charcoal bg-cover bg-center p-5 text-cream"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(31, 29, 26, 0.18), rgba(31, 29, 26, 0.82)), url(${stay.imageUrl})`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-charcoal">
                      {stay.category}
                    </span>
                    <ShieldCheck className="h-5 w-5 text-cream/85" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-cream/70">{stay.location}</p>
                    <h2 className="mt-2 font-serif text-5xl font-semibold leading-none">
                      {stay.name}
                    </h2>
                  </div>
                </div>
              </Link>

              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-brass">{stay.mood}</p>
                    <p className="mt-1 text-sm text-charcoal/55">{stay.price}</p>
                    <p className="mt-1 text-sm text-charcoal/55">{stay.sleeps}</p>
                  </div>
                  <Link href={`/stays/${stay.id}` as `/stays/${string}`}>
                    <ArrowRight
                      className="h-5 w-5 text-charcoal/30 transition group-hover:translate-x-1 group-hover:text-charcoal"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Open {stay.name}</span>
                  </Link>
                </div>

                <div className="mt-4 space-y-2">
                  {stay.trust.map((signal) => (
                    <div key={signal} className="flex items-center gap-2 text-sm text-charcoal/65">
                      <MapPinned className="h-4 w-4 text-moss" aria-hidden="true" />
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {stay.links.slice(0, 2).map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 items-center gap-2 rounded-full border border-charcoal/10 px-3 text-xs font-semibold transition hover:border-charcoal hover:bg-charcoal hover:text-cream"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-5 text-charcoal/45">
                  {stay.imageCredit}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded-[1.75rem] bg-linen p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                Already have a place?
              </p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-ink">
                Skip the stay search and open the local Shadow Map.
              </h2>
            </div>
            <Link
              href="/guide/demo-host"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 text-sm font-semibold text-cream transition hover:bg-ink"
            >
              Open guide preview
              <Waves className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
