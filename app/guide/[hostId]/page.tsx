import Link from "next/link";
import { Compass, ExternalLink, Flame, MapPin, Moon, ShieldCheck } from "lucide-react";
import type { GuestVibe } from "@/lib/demo-data";
import { demoGuide, getDemoGuidePois } from "@/lib/demo-data";

const moods: {
  label: string;
  value: GuestVibe;
  icon: typeof Moon;
}[] = [
  { label: "I'm Burned Out", value: "burned_out", icon: Moon },
  { label: "I'm Energetic", value: "energetic", icon: Flame },
  { label: "I'm Curious", value: "curious", icon: Compass }
];

export default async function GuestGuidePage({
  params,
  searchParams
}: {
  params: Promise<{ hostId: string }>;
  searchParams: Promise<{ vibe?: GuestVibe }>;
}) {
  const { hostId } = await params;
  const { vibe } = await searchParams;
  const selectedMood = moods.some((mood) => mood.value === vibe) ? vibe! : "burned_out";
  const filteredPois = getDemoGuidePois().filter((poi) =>
    poi.vibes.includes(selectedMood)
  );

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="mx-auto min-h-screen w-full max-w-md px-4 py-5">
        <header className="border-b border-charcoal/10 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass">
            Shadow Map
          </p>
          <h1 className="mt-4 font-serif text-6xl font-semibold leading-none text-ink">
            Your local edit
          </h1>
          <p className="mt-4 text-sm leading-6 text-charcoal/65">
            {demoGuide.summary}
          </p>
          <div className="mt-4 grid gap-2 rounded-2xl bg-linen p-3 text-xs text-charcoal/65">
            <div className="flex items-center justify-between gap-3">
              <span>Host</span>
              <strong className="text-charcoal">{demoGuide.hostName}</strong>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>Stay</span>
              <strong className="text-charcoal">{demoGuide.stayName}</strong>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>Updated</span>
              <strong className="text-charcoal">{demoGuide.lastUpdated}</strong>
            </div>
          </div>
          <p className="mt-3 text-xs text-charcoal/45">
            Guide ID: {hostId} · {demoGuide.location}
          </p>
        </header>

        <section className="py-5">
          <div className="grid gap-2">
            {moods.map((mood) => {
              const Icon = mood.icon;
              const isSelected = mood.value === selectedMood;

              return (
                <Link
                  key={mood.value}
                  href={`/guide/${hostId}?vibe=${mood.value}` as `/guide/${string}`}
                  className={`flex h-14 items-center justify-between rounded-full border px-4 text-left text-sm font-semibold transition ${
                    isSelected
                      ? "border-charcoal bg-charcoal text-cream"
                      : "border-charcoal/10 bg-linen hover:border-charcoal"
                  }`}
                >
                  <span>{mood.label}</span>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-3 pb-8">
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
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-none text-ink">
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
      </section>
    </main>
  );
}
