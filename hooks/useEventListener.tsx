import { useEffect, useRef } from 'react';

export default function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element: HTMLElement | Window = window,
) {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    const targetElement = element;

    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}
