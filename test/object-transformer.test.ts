import {
  objectToLinkedList,
  linkedListToObject,
} from '../src/object-transformer';
import { testCases } from './resource/object-tranformer.testcase';

test.each(testCases)('test object to lined list', (testCase) => {
  expect(objectToLinkedList(testCase.obj)).toEqual(testCase.list);
});

test.each(testCases)('test lined list to object', (testCase) => {
  expect(linkedListToObject(testCase.list)).toEqual(testCase.obj);
});
