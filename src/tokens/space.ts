// eslint-disable-next-line import/no-unused-modules
export interface Spaces {
  '3xl': string;
  '2xl': string;
  xl: string;
  lg: string;
  base: string;
  sm: string;
  xs: string;
}

/*
 * The theme's spacing definition follow the general pattern of the box size names as the keys and the space size as the values.
 * As with everything in the tokens, these are easily overwritable using CSS variables.
 */
const space: Spaces = {
  '3xl': 'var(--space-3xl, 1.8rem)',
  '2xl': 'var(--space-2xl, 1.24rem)',
  xl: 'var(--space-xl, 1.16rem)',
  lg: 'var(--space-lg, 1rem)',
  base: 'var(--space-base, 0.8rem)',
  sm: 'var(--space-sm, 0.64rem)',
  xs: 'var(--space-xs, 0.48rem)'
};

export default space;
