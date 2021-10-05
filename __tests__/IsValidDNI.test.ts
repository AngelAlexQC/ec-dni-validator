import { isValidDNI } from '../src/index';

test('isValidDNI', () => {
  expect(isValidDNI('0904939055')).toBe(true);
});
