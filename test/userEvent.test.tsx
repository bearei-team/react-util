import {getPlatformClickEvent} from '../src/userEvent';

describe('test/userEvent.test.ts', () => {
  test('It should be the capture platform event', async () => {
    const clickEvent = getPlatformClickEvent(() => 'callback');

    expect(typeof clickEvent['onClick']).toEqual('function');
    expect(clickEvent['onClick']?.()).toEqual('callback');
  });
});
