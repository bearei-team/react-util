import {isEqual} from '../src/array';

describe('test/array.test.ts', () => {
  test('It should be array equality', async () => {
    const result = isEqual(['1', '3', '2'], ['2', '1', '3']);

    expect(result).toEqual(true);
  });
});
