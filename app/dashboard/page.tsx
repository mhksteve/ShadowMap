import { Copy, LogOut, Mic2, Plus, Sparkles, UploadCloud } from "lucide-react";

const draftPois = [
  {
    name: "Marlow & Finch",
    category: "Eat",
    vibe: "Burned Out",
    tip: "Ask for the garden table and order whatever fish is on the handwritten card."
  },
  {
    name: "The Penny Cellar",
    category: "Drink",
    vibe: "Curious",
    tip: "The owner keeps local pét-nat behind the counter for guests who ask."
  },
  {
    name: "North Steps Walk",
    category: "Explore",
    vibe: "Energetic",
    tip: "Start before 9, then loop back through the flower market."
  }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-charcoal/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
              Host Studio
            </p>
            <h1 className="mt-1 font-serif text-4xl font-semibold text-ink sm:text-5xl">
              Shadow Map
            </h1>
          </div>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 transition hover:border-charcoal">
            <LogOut className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Sign out</span>
          </button>
        </header>

        <section className="grid gap-6 py-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[1.75rem] bg-charcoal p-6 text-cream shadow-editorial sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/55">
              Voice Brain-Dump
            </p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none sm:text-6xl">
              Tell us the places only you know.
            </h2>
            <p className="mt-6 text-base leading-7 text-cream/70">
              Record one flowing note about restaurants, quiet corners, walks,
              shops, galleries, and timing tips. Shadow Map will transcribe it
              and shape each mention into a polished point of interest.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-cream/15 bg-cream/8 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cream/45">
                    Ready
                  </p>
                  <p className="mt-1 font-serif text-3xl font-semibold">
                    00:00
                  </p>
                </div>
                <button className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-cream text-charcoal transition hover:scale-[1.03]">
                  <Mic2 className="h-8 w-8" aria-hidden="true" />
                  <span className="sr-only">Start recording</span>
                </button>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-cream/10">
                <div className="h-full w-1/3 rounded-full bg-brass" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/15 text-sm font-semibold transition hover:bg-cream hover:text-charcoal">
                <UploadCloud className="h-4 w-4" aria-hidden="true" />
                Upload Audio
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brass text-sm font-semibold text-cream transition hover:bg-[#947447]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Extract POIs
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-[1.75rem] border border-charcoal/10 bg-linen p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
                    Public guest guide
                  </p>
                  <h2 className="mt-2 font-serif text-4xl font-semibold text-ink">
                    /guide/host-id-123
                  </h2>
                </div>
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-charcoal/15 px-4 text-sm font-semibold transition hover:border-charcoal">
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Copy URL
                </button>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-charcoal/10 bg-white/45 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
                    Extracted points
                  </p>
                  <h2 className="mt-2 font-serif text-4xl font-semibold text-ink">
                    Local Library
                  </h2>
                </div>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-cream transition hover:bg-ink">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Add point of interest</span>
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {draftPois.map((poi) => (
                  <article
                    key={poi.name}
                    className="rounded-2xl border border-charcoal/10 bg-cream p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-ink">
                          {poi.name}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-charcoal/65">
                          {poi.tip}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="rounded-full bg-charcoal px-3 py-1 text-xs font-semibold text-cream">
                          {poi.category}
                        </span>
                        <span className="rounded-full bg-bone px-3 py-1 text-xs font-semibold text-charcoal">
                          {poi.vibe}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
