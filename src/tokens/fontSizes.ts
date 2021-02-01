// eslint-disable-next-line import/no-unused-modules
export interface FontSizes {
  '3xl': string;
  '2xl': string;
  xl: string;
  lg: string;
  base: string;
  sm: string;
  xs: string;
}

/*
 * The theme's font sizes follow the general pattern of the box size names as the keys and the font size as the values.
 * As with everything in the tokens, these are easily overwritable using CSS variables.
 */
const fontSizes: FontSizes = {
  '3xl': 'var(--text-3xl, 1.88rem)',
  '2xl': 'var(--text-2xl, 1.6rem)',
  xl: 'var(--text-xl, 1.24rem)',
  lg: 'var(--text-lg, 1.12rem)',
  base: 'var(--text-base, 1rem)',
  sm: 'var(--text-sm, 0.88rem)',
  xs: 'var(--text-xs, 0.72rem)'
};

export default fontSizes;
