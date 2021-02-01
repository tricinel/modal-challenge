// eslint-disable-next-line import/no-unused-modules
export interface Breakpoints {
  xl: string;
  lg: string;
  md: string;
  sm: string;
}

/*
 * The theme's breakpoints follow the general pattern of the box size names as the keys and the device widths as the values.
 * We're specifically not defining them as min-width or max-width, because we'll be able to interpolate them inside our components.
 * As with everything in the tokens, these are easily overwritable using CSS variables.
 */
const breakpoints: Breakpoints = {
  xl: 'var(--breakpoint-xl, 75em)',
  lg: 'var(--breakpoint-lg, 64em)',
  md: 'var(--breakpoint-md, 48em)',
  sm: 'var(--breakpoint-sm, 28.75em)'
};

export default breakpoints;
