export type DefaultEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};
export interface HandleEvent {
  <T extends DefaultEvent>(callback?: (e: T) => void): (e: T) => void;
}

export const handleDefaultEvent: HandleEvent =
  <T extends DefaultEvent>(callback?: (e: T) => void) =>
  (e: T) => {
    e.preventDefault?.();
    e.stopPropagation?.();

    return callback?.(e);
  };

export const bindEvents = <T extends string, C = (e: unknown) => void>(
  names: T[],
  match: (key: T) => C,
) => {
  const events = {} as Record<T, (e: unknown) => void>;
  const bindEvent = (key: T) => ({[key]: match(key)});

  names.forEach((key: T) => Object.assign(events, bindEvent(key)));

  return events;
};
