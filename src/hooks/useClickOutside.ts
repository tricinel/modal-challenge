import { useEffect } from 'react';
import type { MutableRefObject } from 'react';

type HTMLElementOrNull = HTMLElement | null;

export default function useClickOutside(
  ref: MutableRefObject<HTMLElementOrNull>,
  handler: () => unknown,
  enabled: boolean
): void {
  useEffect(() => {
    function clickOutside(event: MouseEvent): void {
      // We only want to run the handler when it's enabled and the click is outside
      if (
        enabled &&
        ref.current &&
        !ref.current.contains(event.target as Element)
      ) {
        handler();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', clickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [ref, enabled, handler]);
}
