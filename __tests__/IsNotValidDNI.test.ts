import { isValidDNI } from '../src/index';

test('isNotValidDNI', () => {
  expect(isValidDNI('0904939054')).toBe(false);
});
