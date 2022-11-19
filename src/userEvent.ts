import {GestureResponderEvent} from 'react-native';
import {getPlatform} from './getPlatform';

export type EventType = 'onClick' | 'onPress' | 'onTouchEnd';

export interface Fun {
  (...args: unknown[]): void;
}

/**
 * 处理事件
 */
export type HandleEvent =
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.TouchEvent<HTMLButtonElement>
  | GestureResponderEvent;

export const handleEvent = (e?: HandleEvent, callback?: Fun) => {
  e?.preventDefault?.();
  e?.stopPropagation?.();

  return callback?.();
};

export const getPlatformEvent = (eventFun?: Fun) => {
  const event = {
    nativeApp: 'onPress',
    pcBrowser: 'onClick',
    mobileBrowser: 'onTouchEnd',
  };

  return {
    [event[getPlatform()] as EventType]: eventFun,
  };
};
