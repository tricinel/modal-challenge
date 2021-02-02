import { useEffect, useCallback } from 'react';

export default function useEscapePressed(
  handler: () => unknown,
  enabled: boolean
): void {
  const callbackHandler = useCallback(
    ({ key }: KeyboardEvent): void => {
      // We probably need to augment this with selects and other tagNames as well
      const userIsTyping =
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA';

      // We don't want to run the handler if it's disabled or if the user is filling in a form
      if (userIsTyping || !enabled) {
        return;
      }

      // We only care about the Escape key
      if (key === 'Escape') {
        handler();
      }
    },
    [handler, enabled]
  );

  useEffect(() => {
    window.addEventListener('keyup', callbackHandler);
    return () => {
      window.removeEventListener('keyup', callbackHandler);
    };
  }, [callbackHandler]);
}
