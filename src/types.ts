export type LinkedList<T> = [T, LinkedList<T>] | null;
export type AlternatingLinkedList<S, T> =
  | [S, [T, AlternatingLinkedList<S, T>]]
  | null;
export type Key = string | number | symbol;
