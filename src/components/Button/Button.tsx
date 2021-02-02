import styled from '@emotion/styled';
import { colors, radii, fontSizes } from '../../tokens';

const ButtonBox = styled('button')`
  align-items: center;
  appearance: none;
  background-color: ${colors['neutral-200']};
  border-color: ${colors['neutral-300']};
  border-style: solid;
  border-width: 1px;
  border-radius: ${radii.xs};
  box-sizing: border-box;
  color: ${colors['white-100']};
  display: inline-flex;
  font-size: ${fontSizes.base};
  line-height: 1.32;
  margin: 0;
  outline: 0;
  text-align: center;
  text-decoration: none;
  user-select: none;

  &::after,
  &::before {
    box-sizing: border-box;
  }

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }

  &:focus:not(:disabled) {
    box-shadow: 0 0 0 2px currentColor, 0 0 0 4px ${colors['neutral-200']};
    outline: none;
  }
`;

export default ButtonBox;
