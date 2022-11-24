import handleEvent from '../src/event';

describe('test/userEvent.test.ts', () => {
  test('It should supposed to be an event', async () => {
    const clickEvent = handleEvent(() => 'callback');

    expect(typeof clickEvent).toEqual('function');
    expect(clickEvent({})).toEqual('callback');
  });
});
