import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS, addItem, removeOne, getTotal, getCount } from '../src/cart.mjs';

test('two headsets and one mouse produce one line per id, quantity 3, total 380 DH', () => {
  const empty = Object.freeze([]);
  const one = addItem(empty, PRODUCTS[0]);
  const original = structuredClone(one);
  Object.freeze(one[0]); Object.freeze(one);
  const two = addItem(one, PRODUCTS[0]);
  const three = addItem(two, PRODUCTS[2]);
  assert.deepEqual(one, original);
  assert.equal(three.length, 2);
  assert.equal(three[0].quantity, 2);
  assert.equal(getCount(three), 3);
  assert.equal(getTotal(three), 380);
  assert.notEqual(two[0], one[0]);
});

test('remove decrements then deletes at zero; empty and unknown ids remain safe', () => {
  let cart = addItem(addItem([], PRODUCTS[0]), PRODUCTS[0]);
  const before = structuredClone(cart);
  cart = removeOne(cart, 'casque');
  assert.equal(cart[0].quantity, 1);
  assert.equal(before[0].quantity, 2);
  cart = removeOne(cart, 'casque');
  assert.deepEqual(cart, []);
  assert.equal(getTotal(cart), 0);
  assert.equal(getCount(cart), 0);
  assert.deepEqual(removeOne(cart, 'missing'), []);
  assert.equal(getTotal(addItem(cart, PRODUCTS[2])), 80);
});
