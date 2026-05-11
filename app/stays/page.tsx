import Link from "next/link";
import { ArrowRight, Waves } from "lucide-react";
import { StaysBrowser } from "@/components/stays/stays-browser";
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

        <header className="grid gap-10 py-10 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brass">
              Find a place with proof
            </p>
            <h1 className="mt-5 font-serif text-[clamp(3.5rem,5.2vw,4.75rem)] font-semibold leading-[0.9] text-ink">
              <span className="block">Stay with</span>
              <span className="block">honest</span>
              <span className="block">maps.</span>
            </h1>
          </div>
          <div className="self-end">
            <p className="max-w-2xl text-lg leading-8 text-charcoal/70">
              Search stays where the host&apos;s local knowledge is part of the
              listing: what is worth it, what to avoid, what is nearby, and what
              recent guests quietly confirmed.
            </p>
          </div>
        </header>

        <StaysBrowser stays={demoStays} filters={filters} />

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
