// eslint-disable-next-line import/no-unused-modules
export interface Radii {
  '3xl': string;
  '2xl': string;
  xl: string;
  lg: string;
  base: string;
  sm: string;
  xs: string;
}

/*
 * The theme's border radii follow the general pattern of the box size names as the keys and the border radius as the values.
 * As with everything in the tokens, these are easily overwritable using CSS variables.
 */
const radii: Radii = {
  '3xl': 'var(--border-radius-3xl, 1.88rem)',
  '2xl': 'var(--border-radius-2xl, 1.64rem)',
  xl: 'var(--border-radius-xl, 1.24rem)',
  lg: 'var(--border-radius-lg, 1.16rem)',
  base: 'var(--border-radius-base, 0.8rem)',
  sm: 'var(--border-radius-sm, 0.64rem)',
  xs: 'var(--border-radius-xs, 0.24rem)'
};

export default radii;
