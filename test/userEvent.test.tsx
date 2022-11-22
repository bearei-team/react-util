import {
  getPlatformClickEvent,
  HandleClickEvent,
  handleEvent,
} from '../src/userEvent';

describe('test/userEvent.test.ts', () => {
  test('It should supposed to be an event', async () => {
    const clickEvent = handleEvent(() => 'callback');

    expect(typeof clickEvent).toEqual('function');
    expect(clickEvent({})).toEqual('callback');
  });

  test('It should be the capture platform event', async () => {
    const clickEvent = getPlatformClickEvent(() => 'callback');

    expect(typeof clickEvent['onClick']).toEqual('function');
    expect(clickEvent['onClick']?.({} as HandleClickEvent)).toEqual('callback');
  });
});
