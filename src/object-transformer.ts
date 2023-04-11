import { AlternatingLinkedList, Key, LinkedList } from './types';

/**
 * Convert a JavaScript plain object to a linked list representation.
 * @param object to convert
 * @returns a linked list representation
 */
export function objectToLinkedList<S extends Key, T>(
  object: Record<S, T>
): AlternatingLinkedList<S, T> {
  let result: AlternatingLinkedList<S, T> = null;

  // We try to traverse the object in revere order to preserve order in resulting linked list.
  const stack: S[] = [];
  for (const key in object) {
    stack.push(key);
  }

  for (const key of stack.reverse()) {
    result = [key, [object[key], result]];
  }

  return result;
}

/**
 * Convert a linked list to a JavaScript plain object.
 * @param list linked list to convert
 * @returns a plain object representation
 */
export function linkedListToObject<S extends Key, T>(
  list: AlternatingLinkedList<S, T>
): Record<S, T> {
  // @ts-ignore
  let result: Record<S, T> = {};
  while (list !== null) {
    let key: S, value: T;
    key = list[0];
    value = list[1][0];
    list = list[1][1];
    result[key] = value;
  }
  return result;
}
