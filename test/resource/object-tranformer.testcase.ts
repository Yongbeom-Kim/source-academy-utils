import { Key, LinkedList } from '../../src/types';

interface TestCase<S extends Key, T> {
  obj: Record<S, T>;
  list: LinkedList<S | T>;
}

const empty: TestCase<string, null> = {
  obj: {},
  list: null,
};

const one_key: TestCase<string, number> = {
  obj: { a: 1 },
  list: ['a', [1, null]],
};

const two_keys: TestCase<string, number> = {
  obj: { a: 1, b: 2 },
  list: ['b', [2, ['a', [1, null]]]],
};

const four_keys: TestCase<string, number> = {
  obj: { a: 1, b: 2, c: 3, d: 4 },
  list: ['d', [4, ['c', [3, ['b', [2, ['a', [1, null]]]]]]]],
};

export const testCases = [empty, one_key, two_keys, four_keys];
