export const PRODUCTS = [
  { id: 'casque', name: 'Casque', price: 150 },
  { id: 'clavier', name: 'Clavier', price: 200 },
  { id: 'souris', name: 'Souris', price: 80 },
];

// Utilitaires JavaScript fournis avec le projet de départ.
export function getTotal(cart) {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

export function getCount(cart) {
  let count = 0;
  for (const item of cart) {
    count += item.quantity;
  }
  return count;
}

export function removeOne(cart, id) {
  return cart
    .map(item => item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item)
    .filter(item => item.quantity > 0);
}

export function addItem(cart, product) {

  const exists = cart.some(item => item.id === product.id);
  if (exists) {
    return cart.map(item => item.id === product.id
      ? { ...item, quantity: item.quantity + 1 }
      : item);
  }

  return [...cart, { ...product, quantity: 1 }];
}

