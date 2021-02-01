import type { Validator } from './validations';

function isFn(fn: unknown): boolean {
  return typeof fn === 'function';
}

export default function validate(
  validations: Validator[],
  value: unknown
): boolean {
  let valid = true;

  if (typeof validations !== 'undefined' && validations.length > 0) {
    valid = validations.filter(isFn).every((fn) => fn(value));
  }

  return valid;
}
