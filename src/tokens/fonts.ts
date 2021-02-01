// eslint-disable-next-line import/no-unused-modules
export interface Fonts {
  body: string;
  heading: string;
}

/*
 * The theme's font families include just the body and the heading fonts. They are used throughout the components as needed.
 * As with everything in the tokens, these are easily overwritable using CSS variables.
 */
const fonts: Fonts = {
  body:
    'var(--font-body, -apple-system,Arial,BlinkMacSystemFont,Roboto Slab,Droid Serif,Segoe UI,Ubuntu,Cantarell,Georgia,sans-serif)',
  heading:
    'var(--font-heading, -apple-system,Arial,BlinkMacSystemFont,Roboto Slab,Droid Serif,Segoe UI,Ubuntu,Cantarell,Georgia,sans-serif)'
};

export default fonts;
