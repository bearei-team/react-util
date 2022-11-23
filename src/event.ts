export type DefaultEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

export const handleEvent =
  <T>(callback?: (e: T) => void) =>
  (e: T) => {
    type Event = T & DefaultEvent;

    (e as Event).preventDefault?.();
    (e as Event).stopPropagation?.();

    return callback?.(e);
  };
