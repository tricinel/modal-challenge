// eslint-disable-next-line import/no-unused-modules
export interface Sizes {
  xl: string;
  lg: string;
  base: string;
  sm: string;
  xs: string;
}

/*
 * The theme's sizes follow the general pattern of the box size names as the keys and the actual sizes as the values.
 * As with everything in the tokens, these are easily overwritable using CSS variables.
 */
const sizes: Sizes = {
  xl: 'var(--box-size-xl, 72em)',
  lg: 'var(--box-size-lg, 64em)',
  base: 'var(--box-size-base, 40em)',
  sm: 'var(--box-size-sm, 32em)',
  xs: 'var(--box-size-xs, 24em)'
};

export default sizes;
