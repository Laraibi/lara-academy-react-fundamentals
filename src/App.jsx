import { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import Cart from './Cart.jsx';
import { PRODUCTS, addItem, removeOne } from './cart.mjs';

export default function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const visibleProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  function handleRemove(id) {
    setCart(previous => removeOne(previous, id));
  }

  function handleAdd(product) {
    setCart(previous => addItem(previous, product));
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
      <header className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <a href="/" className="font-bold tracking-wide text-accent">Lara Academy</a>
        <a href="/counter.html" className="text-sm text-indigo-200 underline-offset-4 hover:underline">Le compteur</a>
      </header>
      <p className="text-sm font-semibold tracking-widest text-indigo-200 uppercase">React JS · Les fondamentaux</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">La boutique de Hamza</h1>
      <p className="mt-4 max-w-2xl text-muted">Un catalogue, un panier partagé et un total calculé depuis les données.</p>
      <div className="mt-9 grid gap-7 lg:grid-cols-[2fr_1fr]">
        <section aria-label="Catalogue">
          <label htmlFor="search" className="font-semibold">Chercher un produit</label>
          <input
            className="mt-3 mb-6 block w-full rounded-xl border border-indigo-300/40 bg-surface p-3.5 text-copy focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 disabled:opacity-50"
            id="search"
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          {visibleProducts.length === 0 ? <p className="text-muted">Aucun produit trouvé.</p> : (
            <div className="grid gap-4 sm:grid-cols-3">
              {visibleProducts.map(product => (
                <ProductCard key={product.id} product={product} onAdd={handleAdd} />
              ))}
            </div>
          )}
        </section>
        <Cart items={cart} onRemove={handleRemove} />
      </div>
    </main>
  );
}
