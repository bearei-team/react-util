export type DefaultEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};
export interface HandleEvent {
  <T extends DefaultEvent>(callback?: ((e: T) => void) | undefined): (
    e: T,
  ) => void | undefined;
}

const handleEvent: HandleEvent =
  <T extends DefaultEvent>(callback?: (e: T) => void) =>
  (e: T) => {
    e.preventDefault?.();
    e.stopPropagation?.();

    return callback?.(e);
  };

export default handleEvent;
