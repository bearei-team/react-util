import { bindEvents, handleDefaultEvent } from '../src/event';

describe('test/event.test.ts', () => {
  test('It should handle the default event', async () => {
    const clickEvent = handleDefaultEvent(() => 'callback');

    expect(typeof clickEvent).toEqual('function');
    expect(clickEvent({})).toEqual('callback');
  });

  test('It should be a binding events', async () => {
    const handleCallback = (key: 'onClick') => {
      const event = {
        onClick: handleDefaultEvent((e: unknown) => {
          e;
        }),
      };

      return event[key];
    };
    [];
    const events = ['onClick'] as 'onClick'[];
    const clickEvent = bindEvents(events, handleCallback);

    expect(typeof clickEvent.onClick).toEqual('function');
  });
});
