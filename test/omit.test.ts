import omit from '../src/omit';

describe('test/omit.test.ts', () => {
  test('It should omit the object field', async () => {
    const result = omit({a: 1, b: 2}, ['a']);

    expect(Object.keys(result).toString()).toEqual('b');
  });
});
