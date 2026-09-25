const test = require('node:test');
const assert = require('node:assert/strict');
const P = require('../dist/progress-store.js');

const baseline = {
  answered: 10,
  correct: 8,
  topics: { Porcentagem: { a: 10, c: 8 } },
  essay: 'Texto antigo',
  completed: ['socio']
};

test('empty local snapshot cannot reset cloud progress', () => {
  const result = P.merge({}, baseline);
  assert.equal(result.answered, 10);
  assert.equal(result.correct, 8);
  assert.equal(result.subjects.math.c, 8);
});

test('offline answers from two devices merge exactly once', () => {
  const a = P.record(baseline, 'device-a', 'math', 'Álgebra', true);
  const b = P.record(baseline, 'device-b', 'port', 'Sintaxe', false);
  const result = P.merge(a, b);
  assert.equal(result.answered, 12);
  assert.equal(result.correct, 9);
  assert.deepEqual(P.merge(result, a), result);
  assert.deepEqual(P.merge(result, b), result);
});

test('stale acknowledgement preserves newer answer and observed success count', () => {
  const a = P.record(baseline, 'session', 'math', 'Funções', true);
  const b = P.record(a, 'session', 'math', 'Funções', false);
  const result = P.merge(b, a);
  assert.equal(result.answered, 12);
  assert.equal(result.correct, 9);
});

test('new question labels do not erase historical subject scores', () => {
  assert.deepEqual(P.normalize(baseline).subjects.math, { a: 10, c: 8 });
});

test('unclaimed legacy history is adopted only once; accounts are isolated', () => {
  const values = new Map([['isabele-sesi', JSON.stringify(baseline)]]);
  const store = P.storage({ getItem: k => values.get(k) || null, setItem: (k, v) => values.set(k, v) });
  const old = store.load();
  assert.equal(old.answered, 10);
  store.activate('isabele', old);
  store.detach(old);
  const guest = store.activate('guest', P.normalize());
  assert.equal(guest.answered, 0);
  const other = store.activate('kleber', guest);
  assert.equal(other.answered, 0);
  assert.equal(store.activate('isabele', other).answered, 10);
});

test('anonymous history transfers to existing Google history without double counting', () => {
  const guest = P.record({}, 'guest-session', 'math', 'Área', true);
  const merged = P.merge(guest, baseline);
  assert.equal(merged.answered, 11);
  assert.equal(P.merge(merged, guest).answered, 11);
});

test('shorter newer essay is preserved rather than replaced by a longer stale draft', () => {
  assert.equal(P.merge({ essay: 'Revisão', essayUpdatedAt: 20 }, { essay: 'Texto anterior longo', essayUpdatedAt: 10 }).essay, 'Revisão');
});
