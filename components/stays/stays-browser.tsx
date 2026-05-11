"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPinned, ShieldCheck } from "lucide-react";
import type { DemoStay } from "@/lib/demo-data";

type StaysBrowserProps = {
  stays: DemoStay[];
  filters: string[];
};

export function StaysBrowser({ stays, filters }: StaysBrowserProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleStays = useMemo(() => {
    if (activeFilter === "All") {
      return stays;
    }

    return stays.filter((stay) => stay.filterTags.includes(activeFilter));
  }, [activeFilter, stays]);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...filters].map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-charcoal bg-charcoal text-cream"
                  : "border-charcoal/10 bg-linen hover:border-charcoal hover:bg-charcoal hover:text-cream"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {visibleStays.map((stay) => (
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

              <p className="mt-4 text-xs leading-5 text-charcoal/45">{stay.imageCredit}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
