import {GestureResponderEvent} from 'react-native';

/**
 * 处理事件
 */
export type HandleEvent =
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.TouchEvent<HTMLButtonElement>
  | GestureResponderEvent;

export const handleEvent = (e?: HandleEvent, callback?: (...args: unknown[]) => void) => {
  e?.preventDefault?.();
  e?.stopPropagation?.();

  return callback?.();
};
