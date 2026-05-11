import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-4 text-charcoal">
      <section className="w-full max-w-md rounded-[1.75rem] border border-charcoal/10 bg-linen p-6 shadow-editorial">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">
          Host Login
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold text-ink">
          Welcome back
        </h1>
        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold">Email</span>
            <input
              className="mt-2 h-12 w-full rounded-full border border-charcoal/10 bg-cream px-4 outline-none transition focus:border-charcoal"
              type="email"
              placeholder="host@example.com"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Password</span>
            <input
              className="mt-2 h-12 w-full rounded-full border border-charcoal/10 bg-cream px-4 outline-none transition focus:border-charcoal"
              type="password"
              placeholder="••••••••"
            />
          </label>
          <button className="h-12 w-full rounded-full bg-charcoal text-sm font-semibold text-cream transition hover:bg-ink">
            Sign in
          </button>
        </form>
        <Link
          href="/dashboard"
          className="mt-5 block text-center text-sm font-semibold text-charcoal/65 hover:text-charcoal"
        >
          View dashboard prototype
        </Link>
      </section>
    </main>
  );
}
