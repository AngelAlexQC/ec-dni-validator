import { isValidDNI } from '../src/index';

test('isNotValidDNI', () => {
  expect(isValidDNI('085053949')).toBe(false);
});
test('isNotValidRUC', () => {
  expect(isValidDNI('0850539479002')).toBe(false);
});
test('isNotValidPublicRUC', () => {
  expect(isValidDNI('2360006880001')).toBe(false);
  expect(isValidDNI('1350074400001')).toBe(false);
});
test('isNotValidPrivateRUC', () => {
  expect(isValidDNI('0980049459001')).toBe(false);
  expect(isValidDNI('1690010937001')).toBe(false);
});
