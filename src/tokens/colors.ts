// eslint-disable-next-line import/no-unused-modules
export interface Colors {
  'destructive-100': string;
  'destructive-200': string;
  'destructive-300': string;
  'destructive-400': string;
  'neutral-100': string;
  'neutral-200': string;
  'neutral-300': string;
  'neutral-400': string;
  'information-100': string;
  'information-200': string;
  'information-300': string;
  'information-400': string;
  'confirmation-100': string;
  'confirmation-200': string;
  'confirmation-300': string;
  'confirmation-400': string;
  'white-100': string;
  'white-200': string;
  'white-300': string;
  'white-400': string;
  'black-100': string;
  'black-200': string;
  'black-300': string;
  'black-400': string;
}

/*
 * The theme's colors come on 4 variants, plus white and black. The variants are meant to denote the status or the action the user should undertake.
 * Each color comes with 4 shades, ranging from 100 (light) to 400 (dark).
 * As with everything in the tokens, these are easily overwritable using CSS variables.
 */
const colors: Colors = {
  'destructive-100': 'var(--color-destructive-100, hsl(9,76.92%,94.9%))',
  'destructive-200': 'var(--color-destructive-200, hsl(7.29,79.04%,55.1%))',
  'destructive-300': 'var(--color-destructive-300, hsl(7.25,78.84%,37.06%))',
  'destructive-400': 'var(--color-destructive-400, hsl(7,78.95%,14.9%))',
  'neutral-100': 'var(--color-neutral-100, hsl(180,15.38%,94.9%))',
  'neutral-200': 'var(--color-neutral-200, hsl(180,17.39%,54.9%))',
  'neutral-300': 'var(--color-neutral-300, hsl(180,17.39%,27.06%))',
  'neutral-400': 'var(--color-neutral-400, hsl(180,16.88%,15.1%))',
  'information-100': 'var(--color-information-100, hsl(304.29,53.85%,94.9%))',
  'information-200': 'var(--color-information-200, hsl(303.78,55.46%,55.1%))',
  'information-300': 'var(--color-information-300, hsl(303.58,55.37%,23.73%))',
  'information-400': 'var(--color-information-400, hsl(302.86,55.26%,14.9%))',
  'confirmation-100': 'var(--color-confirmation-100, hsl(216,76.92%,94.9%))',
  'confirmation-200': 'var(--color-confirmation-200, hsl(215.54,80%,54.9%))',
  'confirmation-300': 'var(--color-confirmation-300, hsl(215.78,80.1%,39.41%))',
  'confirmation-400': 'var(--color-confirmation-400, hsl(216.39,79.22%,15.1%))',
  'white-100': 'var(--color-white-100, hsl(0,0%,94.9%))',
  'white-200': 'var(--color-white-200, hsl(0,0%,54.9%))',
  'white-300': 'var(--color-white-300, hsl(0,0%,100%))',
  'white-400': 'var(--color-white-400, hsl(0,0%,14.9%))',
  'black-100': 'var(--color-black-100, hsl(0,0%,94.9%))',
  'black-200': 'var(--color-black-200, hsl(0,0%,54.9%))',
  'black-300': 'var(--color-black-300, hsl(0,0%,0%))',
  'black-400': 'var(--color-black-400, hsl(0,0%,14.9%))'
};

export default colors;
