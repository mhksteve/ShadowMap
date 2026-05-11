"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Compass, ExternalLink, Flame, MapPin, Moon, ShieldCheck } from "lucide-react";
import type { DemoPoi, GuestVibe } from "@/lib/demo-data";

const moods: {
  label: string;
  value: GuestVibe;
  icon: typeof Moon;
}[] = [
  { label: "I'm Burned Out", value: "burned_out", icon: Moon },
  { label: "I'm Energetic", value: "energetic", icon: Flame },
  { label: "I'm Curious", value: "curious", icon: Compass }
];

type GuestGuideClientProps = {
  hostId: string;
  hostName: string;
  stayName: string;
  location: string;
  summary: string;
  lastUpdated: string;
  pois: DemoPoi[];
};

export function GuestGuideClient({
  hostId,
  hostName,
  stayName,
  location,
  summary,
  lastUpdated,
  pois
}: GuestGuideClientProps) {
  const [selectedMood, setSelectedMood] = useState<GuestVibe>("burned_out");

  const filteredPois = useMemo(
    () => pois.filter((poi) => poi.vibes.includes(selectedMood)),
    [pois, selectedMood]
  );

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="mx-auto min-h-screen w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <nav className="mb-5 flex items-center justify-between border-b border-charcoal/10 pb-4">
          <Link href="/" className="font-serif text-3xl font-semibold tracking-normal text-ink">
            Shadow Map
          </Link>
          <Link
            href="/stays"
            className="rounded-full border border-charcoal/15 px-3 py-2 text-xs font-semibold transition hover:border-charcoal hover:bg-charcoal hover:text-cream"
          >
            Stays
          </Link>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:py-6">
          <div className="lg:sticky lg:top-5">
            <header className="border-b border-charcoal/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass">
                Host local guide
              </p>
              <h1 className="mt-4 font-serif text-[clamp(4rem,9vw,5.8rem)] font-semibold leading-[0.9] text-ink">
                <span className="block">Your local</span>
                <span className="block">edit</span>
              </h1>
              <p className="mt-4 text-sm leading-6 text-charcoal/65">{summary}</p>
              <div className="mt-4 grid gap-2 rounded-2xl bg-linen p-3 text-xs text-charcoal/65">
                <div className="flex items-center justify-between gap-3">
                  <span>Host</span>
                  <strong className="text-charcoal">{hostName}</strong>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Stay</span>
                  <strong className="text-charcoal">{stayName}</strong>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Updated</span>
                  <strong className="text-charcoal">{lastUpdated}</strong>
                </div>
              </div>
              <p className="mt-3 text-xs text-charcoal/45">
                Guide ID: {hostId} - {location}
              </p>
            </header>

            <section className="py-5">
              <div className="grid gap-2">
                {moods.map((mood) => {
                  const Icon = mood.icon;
                  const isSelected = mood.value === selectedMood;

                  return (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={`flex h-14 items-center justify-between rounded-full border px-4 text-left text-sm font-semibold transition ${
                        isSelected
                          ? "border-charcoal bg-charcoal text-cream"
                          : "border-charcoal/10 bg-linen hover:border-charcoal"
                      }`}
                    >
                      <span>{mood.label}</span>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          <section className="grid gap-3 pb-8 md:grid-cols-2" aria-live="polite">
            {filteredPois.map((poi) => (
              <article
                key={poi.id}
                className="rounded-[1.5rem] border border-charcoal/10 bg-white/50 p-5"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-charcoal px-3 py-1 text-xs font-semibold text-cream">
                    {poi.category}
                  </span>
                  <span className="rounded-full bg-bone px-3 py-1 text-xs font-semibold text-charcoal">
                    {poi.hostConfidence}
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-none text-ink sm:text-4xl">
                  {poi.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-charcoal/70">{poi.hostTip}</p>
                <p className="mt-3 text-sm leading-6 text-charcoal/55">
                  {poi.whyRecommended}
                </p>

                <div className="mt-4 grid gap-2 rounded-2xl bg-linen p-3 text-xs text-charcoal/65">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-moss" aria-hidden="true" />
                    Last confirmed: {poi.lastConfirmed}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-moss" aria-hidden="true" />
                    Best time: {poi.bestTime}
                  </div>
                  <div>Avoid if: {poi.avoidIf}</div>
                  <div>Affiliation: {poi.affiliation}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {poi.bestFor.map((item) => (
                    <span key={item} className="rounded-full bg-cream px-3 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4 space-y-1 text-xs text-charcoal/45">
                  {poi.guestSignals.map((signal) => (
                    <p key={signal}>{signal}</p>
                  ))}
                </div>

                <a
                  href={poi.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-charcoal px-4 text-xs font-semibold text-cream transition hover:bg-ink"
                >
                  Open sample map
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
