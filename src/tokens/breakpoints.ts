// eslint-disable-next-line import/no-unused-modules
export interface Breakpoints {
  xl: number;
  lg: number;
  md: number;
  sm: number;
}

/*
 * The theme's breakpoints follow the general pattern of the box size names as the keys and the device widths as the values.
 * Interpolating CSS variables inside of media queries doesn't work just yet. :(
 */
const breakpoints: Breakpoints = {
  xl: 75,
  lg: 64,
  md: 48,
  sm: 28.75
};

export default breakpoints;
