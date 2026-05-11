import { Compass, Flame, Moon } from "lucide-react";

const moods = [
  { label: "I'm Burned Out", icon: Moon },
  { label: "I'm Energetic", icon: Flame },
  { label: "I'm Curious", icon: Compass }
];

const pois = [
  {
    name: "Marlow & Finch",
    category: "Eat",
    tip: "Ask for the garden table and order whatever fish is on the handwritten card."
  },
  {
    name: "North Steps Walk",
    category: "Explore",
    tip: "Go before the morning rush and return through the flower market."
  }
];

export default async function GuestGuidePage({
  params
}: {
  params: Promise<{ hostId: string }>;
}) {
  const { hostId } = await params;

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
            A private guide from your host. No login, no download, just the
            best nearby choices for how today feels.
          </p>
          <p className="mt-3 text-xs text-charcoal/45">Guide ID: {hostId}</p>
        </header>

        <section className="py-5">
          <div className="grid gap-2">
            {moods.map((mood) => {
              const Icon = mood.icon;

              return (
                <button
                  key={mood.label}
                  className="flex h-14 items-center justify-between rounded-full border border-charcoal/10 bg-linen px-4 text-left text-sm font-semibold transition hover:border-charcoal hover:bg-charcoal hover:text-cream"
                >
                  <span>{mood.label}</span>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-3 pb-8">
          {pois.map((poi) => (
            <article
              key={poi.name}
              className="rounded-[1.5rem] border border-charcoal/10 bg-white/50 p-5"
            >
              <span className="rounded-full bg-charcoal px-3 py-1 text-xs font-semibold text-cream">
                {poi.category}
              </span>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-ink">
                {poi.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-charcoal/65">{poi.tip}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
