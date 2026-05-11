import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ExternalLink,
  Map,
  ShieldCheck,
  TriangleAlert
} from "lucide-react";
import { getPoisForStay, getStayById } from "@/lib/demo-data";

const trustIcons = [BadgeCheck, CalendarCheck, ShieldCheck];

export default async function StayDetailPage({
  params
}: {
  params: Promise<{ stayId: string }>;
}) {
  const { stayId } = await params;
  const stay = getStayById(stayId);
  const pois = getPoisForStay(stay.id);

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="mx-auto w-full max-w-6xl px-5 py-5 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-charcoal/10 pb-5">
          <Link
            href="/stays"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/70 transition hover:text-charcoal"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to stays
          </Link>
          <Link href="/" className="font-serif text-3xl font-semibold tracking-normal">
            Shadow Map
          </Link>
        </nav>

        <header className="grid gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
          <div
            className="overflow-hidden rounded-[2rem] bg-charcoal bg-cover bg-center p-6 text-cream shadow-editorial sm:p-8"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(31, 29, 26, 0.22), rgba(31, 29, 26, 0.86)), url(${stay.imageUrl})`
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/65">
              Trusted stay preview
            </p>
            <h1 className="mt-5 font-serif text-[clamp(4rem,10vw,8rem)] font-semibold leading-[0.82]">
              {stay.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-cream/78">
              {stay.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stay.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-charcoal"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-cream/55">
              Demo listing ID: {stay.id}
            </p>
          </div>

          <aside className="rounded-[2rem] border border-charcoal/10 bg-linen p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
              Why trust it?
            </p>
            <div className="mt-5 space-y-3">
              {stay.trust.map((signal, index) => {
                const Icon = trustIcons[index] ?? ShieldCheck;

                return (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-2xl bg-cream p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-cream">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold">{signal}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-charcoal/10 bg-white/45 p-4">
              <p className="font-serif text-3xl font-semibold text-ink">
                Book elsewhere, trust here.
              </p>
              <p className="mt-2 text-sm leading-6 text-charcoal/65">
                These buttons are temporary sample links. Later they become real
                Airbnb, partner, or direct booking URLs from Supabase.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stay.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-full bg-charcoal px-3 text-xs font-semibold text-cream transition hover:bg-ink"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </header>

        <section className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.75rem] border border-charcoal/10 bg-white/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
              Stay essentials
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-charcoal/10 pb-3">
                <dt className="text-charcoal/55">Type</dt>
                <dd className="font-semibold">{stay.category}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-charcoal/10 pb-3">
                <dt className="text-charcoal/55">Host</dt>
                <dd className="font-semibold">{stay.hostName}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-charcoal/10 pb-3">
                <dt className="text-charcoal/55">Area</dt>
                <dd className="font-semibold">{stay.neighborhood}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-charcoal/10 pb-3">
                <dt className="text-charcoal/55">Price note</dt>
                <dd className="font-semibold">{stay.price}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/55">Guide status</dt>
                <dd className="font-semibold">Demo host approved</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-2xl bg-linen p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-clay">
                <TriangleAlert className="h-4 w-4" aria-hidden="true" />
                Host caveats
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-charcoal/65">
                {stay.warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            </div>

            <a
              href={stay.imageSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-xs font-semibold text-charcoal/45 hover:text-charcoal"
            >
              {stay.imageCredit}
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-charcoal/10 bg-linen p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                  Shadow Map preview
                </p>
                <h2 className="mt-2 font-serif text-4xl font-semibold text-ink">
                  The honest local edit
                </h2>
              </div>
              <Map className="h-5 w-5 text-charcoal/40" aria-hidden="true" />
            </div>

            <div className="mt-5 grid gap-3">
              {pois.slice(0, 4).map((item) => (
                <article key={item.id} className="rounded-2xl bg-cream p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-charcoal px-3 py-1 text-xs font-semibold text-cream">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-bone px-3 py-1 text-xs font-semibold text-charcoal">
                      {item.hostConfidence}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/65">
                    {item.whyRecommended}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/guide/demo-host"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 text-sm font-semibold text-cream transition hover:bg-ink"
            >
              Open full Shadow Map
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
