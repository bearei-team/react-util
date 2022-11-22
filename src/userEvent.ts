import {GestureResponderEvent} from 'react-native';
import {getPlatform} from './getPlatform';

export type DefaultEvent = {
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

export type OnClickEvent = 'onClick' | 'onPress' | 'onTouchEnd';
export type HandleClickEvent =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.TouchEvent<HTMLElement>
  | GestureResponderEvent;

export type ClickEventFun = (e: HandleClickEvent) => void;
export const handleEvent =
  <T extends DefaultEvent>(callback?: (e: T) => void) =>
  (e: T) => {
    e.preventDefault?.();
    e.stopPropagation?.();

    return callback?.(e);
  };

export const getPlatformClickEvent = (eventFun?: ClickEventFun) => {
  const event = {
    reactNative: 'onPress',
    pcBrowser: 'onClick',
    mobileBrowser: 'onTouchEnd',
  };

  return {
    [event[getPlatform()]]: handleEvent<HandleClickEvent>(eventFun),
  } as Record<OnClickEvent, ClickEventFun | undefined>;
};
