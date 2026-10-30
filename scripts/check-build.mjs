import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const files = await readdir(new URL('../dist/assets/', import.meta.url));
const css = (await Promise.all(files.filter(f => f.endsWith('.css')).map(f => readFile(new URL(`../dist/assets/${f}`, import.meta.url), 'utf8')))).join('\n');
assert.match(css, /tailwindcss v4\.3\.3/);
assert.match(css, /grid-template-columns/);
assert.match(css, /--color-accent/);
assert.ok(!css.includes('@import "tailwindcss"'), 'Tailwind must compile into actual CSS');
for (const page of ['index.html', 'counter.html', 'vanilla.html']) {
  const html = await readFile(new URL(`../dist/${page}`, import.meta.url), 'utf8');
  assert.match(html, /assets\/.+\.js/);
}
console.log('Production smoke: all three HTML entries and compiled Tailwind utility CSS verified.');
