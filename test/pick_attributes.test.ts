import {
  pickHTMLAttributes,
  pickNativeAttributes,
} from '../src/pick_attributes';

describe('test/pickAttributes.test.ts', () => {
  test('It should be the pick HTML attribute', async () => {
    const result = pickHTMLAttributes({
      a: 1,
      b: 2,
      alt: 'alt',
      onCopy: () => {},
      'data-cy': 'data',
      'aria-label': 'aria',
    });

    expect(result.alt).toEqual('alt');
    expect(result['data-cy']).toEqual('data');
    expect(result['aria-label']).toEqual('aria');
    expect(result.a).toEqual(undefined);
    expect(result.b).toEqual(undefined);
  });

  test('It should be the pick native attribute', async () => {
    const result = pickNativeAttributes({
      a: 1,
      b: 2,
      animating: 'animating',
      onCopy: () => {},
      'aria-disabled': 'disabled',
      'aria-label': 'aria',
    });

    expect(result.animating).toEqual('animating');
    expect(result['aria-disabled']).toEqual('disabled');
    expect(result['aria-label']).toEqual('aria');
    expect(result.a).toEqual(undefined);
    expect(result.b).toEqual(undefined);
  });
});
