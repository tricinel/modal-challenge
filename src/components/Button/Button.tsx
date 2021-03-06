import styled from '@emotion/styled';
import Box from '../Box';
import { colors, radii, fontSizes } from '../../tokens';

const ButtonBox = styled(Box.withComponent('button'))`
  align-items: center;
  background-color: ${colors['neutral-200']};
  border-color: ${colors['neutral-300']};
  border-style: solid;
  border-width: 1px;
  border-radius: ${radii.xs};
  color: ${colors['white-100']};
  display: inline-flex;
  font-size: ${fontSizes.base};
  line-height: 1.32;
  margin: 0;
  text-align: center;
  text-decoration: none;
  user-select: none;

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }

  /* These get then set from the individual buttons */
  --button-focus-box-shadow-color-inner: currentColor;
  --button-focus-box-shadow-color-outer: ${colors['neutral-200']};

  &:focus {
    /* Fallback for browsers without :focus-visible */
    box-shadow: 0 0 0 2px var(--button-focus-box-shadow-color-inner),
      0 0 0 4px var(--button-focus-box-shadow-color-outer);
    outline: none;
  }

  &:focus:not(:focus-visible) {
    /* No indicator for browsers with :focus-visible */
    box-shadow: none;
    outline: none;
  }

  &:focus-visible {
    /* Keyboard-only focus ring */
    box-shadow: 0 0 0 2px var(--button-focus-box-shadow-color-inner),
      0 0 0 4px var(--button-focus-box-shadow-color-outer);
    outline: none;
  }
`;

export default ButtonBox;
