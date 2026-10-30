export default function Counter({ label = 'Le compteur de Hamza' }) {
  // TODO : useState(0), handleClick, puis onClick={handleClick}.
  const count = 0;

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <a href="/" className="text-indigo-200 underline">Retour à la boutique</a>
      <section className="mt-8 rounded-2xl border border-white/10 bg-panel p-8">
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="my-6 text-2xl">Clics : <strong className="text-accent" aria-live="polite">{count}</strong></p>
        <button
          disabled
          className="cursor-pointer rounded-lg bg-accent px-4 py-3 font-semibold text-ink transition hover:bg-amber-300 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Ajouter
        </button>
      </section>
    </main>
  );
}
