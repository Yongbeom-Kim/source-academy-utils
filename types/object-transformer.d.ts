import { AlternatingLinkedList, Key } from './types';
/**
 * Convert a JavaScript plain object to a linked list representation.
 * @param object to convert
 * @returns a linked list representation
 */
export declare function objectToLinkedList<S extends Key, T>(object: Record<S, T>): AlternatingLinkedList<S, T>;
/**
 * Convert a linked list to a JavaScript plain object.
 * @param list linked list to convert
 * @returns a plain object representation
 */
export declare function linkedListToObject<S extends Key, T>(list: AlternatingLinkedList<S, T>): Record<S, T>;
