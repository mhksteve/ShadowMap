import Link from "next/link";
import { ArrowRight, MapPinned, Mic2, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Mic2,
    title: "Voice Brain-Dump",
    copy: "Record the kind of local notes that never fit in a generic guidebook."
  },
  {
    icon: Sparkles,
    title: "AI Concierge Layer",
    copy: "Transcribe, classify, and turn host tips into mood-aware recommendations."
  },
  {
    icon: MapPinned,
    title: "Guest-Ready Guide",
    copy: "Publish a private-feeling URL with no guest login and no app download."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-charcoal/10 pb-5">
          <Link href="/" className="font-serif text-3xl font-semibold tracking-normal">
            Shadow Map
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-charcoal/20 px-4 text-sm font-medium transition hover:border-charcoal hover:bg-charcoal hover:text-cream"
          >
            Host Dashboard
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-brass">
              The local secret concierge
            </p>
            <h1 className="font-serif text-[clamp(4rem,11vw,9.75rem)] font-semibold leading-[0.83] tracking-normal text-ink">
              Make every stay feel personally edited.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/75 sm:text-xl">
              Shadow Map turns a host&apos;s voice notes into a guest-ready guide
              shaped by mood, pace, and taste. Less generic travel content. More
              &quot;you must try the little place two doors down.&quot;
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 text-sm font-semibold text-cream transition hover:bg-ink"
              >
                Start a Host Guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/guide/demo-host"
                className="inline-flex h-12 items-center justify-center rounded-full border border-charcoal/20 px-6 text-sm font-semibold transition hover:border-charcoal"
              >
                Preview Guest View
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-charcoal/10 bg-linen p-4 shadow-editorial">
            <div className="rounded-[1.5rem] bg-cream p-5">
              <div className="flex items-start justify-between border-b border-charcoal/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-charcoal/45">
                    Tonight&apos;s edit
                  </p>
                  <h2 className="mt-2 font-serif text-4xl font-semibold text-ink">
                    Curious
                  </h2>
                </div>
                <span className="rounded-full bg-moss px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream">
                  Live
                </span>
              </div>

              <div className="space-y-4 pt-5">
                {["Tiny natural wine bar", "Late bakery window", "Canal-side gallery"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-2xl border border-charcoal/10 bg-white/45 p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-sm font-semibold text-cream">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-ink">
                          {item}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-charcoal/65">
                          Host tip extracted from a voice note, ready for a
                          guest&apos;s mood filter.
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </aside>
        </div>

        <section className="grid gap-3 border-t border-charcoal/10 py-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="rounded-2xl bg-white/45 p-5">
                <Icon className="h-5 w-5 text-brass" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-charcoal/65">
                  {pillar.copy}
                </p>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}
