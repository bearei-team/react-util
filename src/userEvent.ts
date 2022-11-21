import {GestureResponderEvent} from 'react-native';
import {getPlatform} from './getPlatform';

export type OnClickEvent = 'onClick' | 'onPress' | 'onTouchEnd';
export type HandleClickEvent =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.TouchEvent<HTMLElement>
  | GestureResponderEvent;

export type ClickEventFun = (e?: HandleClickEvent) => unknown;

export const getPlatformClickEvent = (eventFun?: ClickEventFun) => {
  const event = {
    reactNative: 'onPress',
    pcBrowser: 'onClick',
    mobileBrowser: 'onTouchEnd',
  };

  const handleEvent = (callback?: ClickEventFun) => (e?: HandleClickEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    return callback?.(e);
  };

  return {
    [event[getPlatform()]]: handleEvent(eventFun),
  } as Record<OnClickEvent, ClickEventFun | undefined>;
};
