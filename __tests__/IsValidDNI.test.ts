import { isValidDNI } from '../src/index';

test('isValidDNI', () => {
  expect(isValidDNI('0850539479')).toBe(true);
});
test('isValidRUC', () => {
  expect(isValidDNI('0850539479001')).toBe(true);
});
test('isValidPublicRUC', () => {
  expect(isValidDNI('2360007880001')).toBe(true);
  expect(isValidDNI('1360074400001')).toBe(true);
});
test('isValidPrivateRUC', () => {
  expect(isValidDNI('0990049459001')).toBe(true);
  expect(isValidDNI('1790010937001')).toBe(true);
});
