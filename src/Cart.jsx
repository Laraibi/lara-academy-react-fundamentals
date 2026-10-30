import { getTotal, getCount } from './cart.mjs';

export default function Cart({ items, onRemove }) {
  return (
    <aside className="self-start rounded-2xl border border-white/10 bg-panel p-6" aria-label="Panier">
      <h2 className="text-xl font-bold">Mon panier · {getCount(items)}</h2>
      {items.length === 0 ? <p className="mt-6 text-muted">Le panier est vide.</p> : (
        <ul className="mt-5 space-y-4">
          {items.map(item => (
            <li className="flex items-center justify-between gap-3" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              {onRemove && <button className="cursor-pointer rounded-lg bg-accent px-4 py-3 font-semibold text-ink transition hover:bg-amber-300 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 disabled:cursor-not-allowed disabled:opacity-50" aria-label={`Retirer un ${item.name}`} onClick={() => onRemove(item.id)}>−1</button>}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6 border-t border-white/15 pt-5 text-lg" aria-live="polite">
        Total : <strong className="text-accent">{getTotal(items)} DH</strong>
      </p>
    </aside>
  );
}
