import {GestureResponderEvent} from 'react-native';
import {getPlatform} from './getPlatform';

export type EventType = 'onClick' | 'onPress' | 'onTouchEnd';
export type Fun = () => unknown;
export type EventFun = () => unknown;
export type HandleEvent =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.TouchEvent<HTMLElement>
  | GestureResponderEvent;

export const handleEvent = (e?: HandleEvent, callback?: Fun) => {
  e?.preventDefault?.();
  e?.stopPropagation?.();

  return callback?.();
};

export const getPlatformEvent = (eventFun?: EventFun) => {
  const event = {
    reactNative: 'onPress',
    pcBrowser: 'onClick',
    mobileBrowser: 'onTouchEnd',
  };

  return {
    [event[getPlatform()]]: eventFun,
  } as Record<EventType, EventFun | undefined>;
};
