// eslint-disable-next-line import/no-unused-modules
export type Validator =
  | ((value: unknown) => boolean)
  | ((comparator: unknown, value?: unknown) => boolean)
  | ((comparator: unknown) => (value: unknown) => boolean);

export function isRequired(value: string | number | boolean): boolean {
  if (typeof value === 'undefined') {
    return false;
  }

  if (typeof value === 'string' && value.length === 0) {
    return false;
  }

  return true;
}

export function isExactly(
  comparator: string,
  value?: string
): boolean | ((value: string) => boolean) {
  if (typeof value !== 'undefined') {
    return value === comparator;
  }

  return (v: string): boolean => v === comparator;
}
