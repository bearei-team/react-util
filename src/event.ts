export type DefaultEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

export interface HandleDefaultEvent {
  <T extends DefaultEvent = DefaultEvent>(callback?: (e: T) => void): (
    e: T,
  ) => void;
}

export const handleDefaultEvent: HandleDefaultEvent =
  <T extends DefaultEvent = DefaultEvent>(callback?: (e: T) => void) =>
  (e: T) => {
    e.preventDefault?.();
    e.stopPropagation?.();

    return callback?.(e);
  };

export const bindEvents = <T extends string, C = (e: unknown) => void>(
  names: T[],
  match: (key: T) => C,
) => {
  const events = {} as Record<T, C>;
  const bindEvent = (key: T) => ({ [key]: match(key) });

  names.forEach((key: T) => Object.assign(events, bindEvent(key)));

  return events;
};
