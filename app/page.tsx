import Link from "next/link";
import { ArrowRight, BedDouble, KeyRound, MapPinned, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Host-backed truth",
    copy: "Recommendations begin with a real host, then get checked by guest feedback and freshness signals."
  },
  {
    icon: Sparkles,
    title: "AI, kept in its lane",
    copy: "AI organizes the guide, extracts useful details, and flags weak claims without pretending to be the source."
  },
  {
    icon: MapPinned,
    title: "Fewer, better choices",
    copy: "Guests see nearby places with honest context: best for, avoid if, last confirmed, and what makes it worth it."
  }
] as const;

const entryPoints = [
  {
    href: "/stays",
    icon: BedDouble,
    eyebrow: "Find a place first",
    title: "Stay somewhere with a guide worth trusting.",
    copy: "Browse boutique stays, guesthouses, and host partners where the local Shadow Map is part of the reason to book.",
    cta: "Explore trusted stays"
  },
  {
    href: "/guide/demo-host",
    icon: KeyRound,
    eyebrow: "Already booked",
    title: "Unlock the local edit around your stay.",
    copy: "Open your host's Shadow Map, choose the mood you're in, and get a tight set of places that fit the day.",
    cta: "Open a guide preview"
  }
] as const;

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
              Stays with a secret map
            </p>
            <h1 className="font-serif text-[clamp(4rem,11vw,9.75rem)] font-semibold leading-[0.83] tracking-normal text-ink">
              Find the stay. Trust the map.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/75 sm:text-xl">
              Shadow Map is for guests who want more than pretty rooms and fake
              top tens. Find a stay with real local intelligence, or unlock the
              honest guide for a place you&apos;ve already booked.
            </p>
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
                    <article
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
                          Personally recommended, guest-validated, and ready
                          for the mood you&apos;re actually in.
                        </p>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          </aside>
        </div>

        <section className="grid gap-4 border-t border-charcoal/10 py-6 lg:grid-cols-2">
          {entryPoints.map((entry) => {
            const Icon = entry.icon;

            return (
              <Link
                key={entry.title}
                href={entry.href}
                className="group rounded-[1.5rem] border border-charcoal/10 bg-white/50 p-5 transition hover:-translate-y-1 hover:border-charcoal/30 hover:shadow-editorial sm:p-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-cream">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <ArrowRight
                    className="h-5 w-5 text-charcoal/35 transition group-hover:translate-x-1 group-hover:text-charcoal"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                  {entry.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold leading-none text-ink sm:text-5xl">
                  {entry.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-charcoal/65">
                  {entry.copy}
                </p>
                <p className="mt-6 text-sm font-semibold text-charcoal">{entry.cta}</p>
              </Link>
            );
          })}
        </section>

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
