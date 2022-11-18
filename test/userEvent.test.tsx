import {handleEvent} from '../src/userEvent';

describe('test/userEvent.test.ts', () => {
  test('It should be handling user interaction events', async () => {
    const result = handleEvent(undefined, () => 'callback');

    expect(result).toEqual('callback');
  });
});
