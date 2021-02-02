/**
 * Calls all functions in the order they were chained with the same arguments.
 */
export default function chain(
  ...callbacks: unknown[]
): (...args: unknown[]) => void {
  return (...args: unknown[]) => {
    for (const callback of callbacks) {
      if (typeof callback === 'function') {
        callback(...args);
      }
    }
  };
}
