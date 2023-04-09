export type LinkedList<T> = [T, LinkedList<T>] | null;
export type AlternatingLinkedList<S, T> =
  | [S, AlternatingLinkedList<T, S>]
  | null;
export type Key = string | number | symbol;
