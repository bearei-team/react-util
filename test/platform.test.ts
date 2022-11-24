import platform, {isMobile} from '../src/platform';

describe('test/getPlatform.test.ts', () => {
  test('It should be checking the running platform for mobile', async () => {
    const result = isMobile();

    expect(result).toEqual(false);
  });

  test('It should be to get the current running platform', async () => {
    const result = platform();

    expect(result).toEqual('pcBrowser');
  });
});
