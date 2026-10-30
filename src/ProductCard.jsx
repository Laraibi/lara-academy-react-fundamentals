export default function ProductCard({ product, onAdd }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-panel p-5">
      <div aria-hidden="true" className="mb-5 rounded-xl bg-surface py-8 text-center text-4xl text-accent">
        {product.name.slice(0, 1)}
      </div>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="mt-2 mb-6 text-muted">{product.price} DH</p>
      <button className="cursor-pointer rounded-lg bg-accent px-4 py-3 font-semibold text-ink transition hover:bg-amber-300 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 disabled:cursor-not-allowed disabled:opacity-50 mt-auto" disabled={!onAdd} onClick={() => onAdd(product)}>
        Ajouter {product.name}
      </button>
    </article>
  );
}
