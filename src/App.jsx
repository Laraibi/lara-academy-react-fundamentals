import ProductCard from './ProductCard.jsx';
import Cart from './Cart.jsx';
import { PRODUCTS } from './cart.mjs';

export default function App() {
  // Étape 1 : lire ProductCard et identifier product transmis en props.
  // TODO 2 : remplacer le compteur statique dans Counter.jsx par useState.
  // TODO 3 : remplacer cart par useState([]), puis relier handleAdd / handleRemove.
  // TODO 4 : remplacer query par useState(''), puis filtrer PRODUCTS.
  const cart = [];
  const query = '';
  const visibleProducts = PRODUCTS;

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
            disabled placeholder="À connecter pendant le cours"
          />
          {visibleProducts.length === 0 ? <p className="text-muted">Aucun produit trouvé.</p> : (
            <div className="grid gap-4 sm:grid-cols-3">
              {visibleProducts.map(product => (
                <ProductCard key={product.id} product={product}  />
              ))}
            </div>
          )}
        </section>
        <Cart items={cart}  />
      </div>
    </main>
  );
}
