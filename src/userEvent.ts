import {GestureResponderEvent} from 'react-native';
import {getPlatform} from './getPlatform';

export type EventType = 'onClick' | 'onPress' | 'onTouchEnd';
export type HandleEvent =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.TouchEvent<HTMLElement>
  | GestureResponderEvent;

export type EventFun = (e?: HandleEvent) => unknown;
export const handleEvent = (callback?: EventFun) => (e?: HandleEvent) => {
  e?.preventDefault?.();
  e?.stopPropagation?.();

  return callback?.(e);
};

export const getPlatformEvent = (eventFun?: EventFun) => {
  const event = {
    reactNative: 'onPress',
    pcBrowser: 'onClick',
    mobileBrowser: 'onTouchEnd',
  };

  return {
    [event[getPlatform()]]: handleEvent(eventFun),
  } as Record<EventType, EventFun | undefined>;
};
