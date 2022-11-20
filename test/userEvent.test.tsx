import {handleEvent, getPlatformEvent} from '../src/userEvent';

describe('test/userEvent.test.ts', () => {
  test('It should be handling user interaction events', async () => {
    const result = handleEvent(() => 'callback')();

    expect(result).toEqual('callback');
  });

  test('It should be the capture platform event', async () => {
    const result = getPlatformEvent(() => 'callback');

    expect(typeof result['onClick']).toEqual('function');
    expect(result['onClick']?.()).toEqual('callback');
  });
});
