import styled from '@emotion/styled';
import { colors, space, fontSizes, radii, fonts } from '../../tokens';
import type { FormControlProps } from './types';

const FormControl = styled('input')<FormControlProps>`
  appearance: none;
  background-color: ${(props) =>
    typeof props.isValid !== 'undefined' && props.isValid
      ? 'transparent'
      : colors['destructive-100']};
  border: ${(props) =>
    `1px solid ${
      colors[
        typeof props.isValid !== 'undefined' && props.isValid
          ? 'black-200'
          : 'destructive-200'
      ]
    }`};
  box-sizing: border-box;
  border-radius: ${radii.xs};
  font-family: ${fonts.body};
  font-size: ${fontSizes.base};
  line-height: 1;
  margin: ${space.xs} 0 0 0;
  outline: 0;
  padding: ${space.xs};
  transition: background-color,
    box-shadow cubic-bezier(0, 0.88, 0.96, 0.96) 0.88s;
  width: 100%;

  &::after,
  &::before {
    box-sizing: border-box;
  }

  &:focus {
    background-color: ${colors['neutral-100']};
    border-color: ${colors['neutral-200']};
    box-shadow: 0 0 2px 2px hsla(0, 0%, 0%, 0.08);
    outline: none;
  }

  &[readonly] {
    background-color: ${colors['information-100']};
  }

  &[disabled] {
    background-color: ${colors['neutral-100']};
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion) {
    transition: none;
  }
`;

export default FormControl;
