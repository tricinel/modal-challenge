import React from 'react';
import type { ReactNode } from 'react';
import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import type { ButtonHTMLProps, BoxSize, Action } from '../../core/types';
import ButtonBox from './Button';
import { colors, space, fontSizes } from '../../tokens';
import type { Colors } from '../../tokens/colors';

type Appearance = 'full' | 'outline' | 'ghost';

function styles(
  action: Action,
  appearance: Appearance,
  size: BoxSize
): SerializedStyles {
  const outline = appearance === 'outline';
  const ghost = appearance === 'ghost';
  const white = colors['white-300'];
  const bg = ghost ? 'transparent' : colors[`${action}-200` as keyof Colors];
  const color = ghost ? colors[`${action}-300` as keyof Colors] : white;
  const hover = colors[`${action}-300` as keyof Colors];
  const ghostHover = colors[`${action}-200` as keyof Colors];

  return css`
    padding: ${space[size]};

    &:hover:not(:disabled),
    &:active:not(:disabled) {
      background-color: ${ghost ? 'transparent' : hover};
      border-color: ${ghost ? 'transparent' : hover};
    }

    &:active:not(:disabled) {
      transform: translateY(2px);
    }

    && {
      background-color: ${outline ? 'transparent' : bg};
      border-color: ${outline ? hover : bg};
      color: ${outline ? bg : color};
      font-size: ${fontSizes[size]};

      --button-focus-box-shadow-color-inner: ${colors['white-100']};
      --button-focus-box-shadow-color-outer: ${bg};

      &:hover:not(:disabled),
      &:active:not(:disabled) {
        color: ${ghost ? ghostHover : white};
      }
    }
  `;
}

// eslint-disable-next-line import/no-unused-modules
export interface ButtonProps extends ButtonHTMLProps {
  /** Determine the `background-color/border-color/color` styles combination */
  action?: Action;
  /** Determine the size of the font and the padding */
  size?: BoxSize;
  /** Determine the visual appearance of the button */
  appearance?: Appearance;
  /** The content to display as the inside the button */
  children: ReactNode;
}

export default function Button({
  action = 'confirmation',
  appearance = 'full',
  size = 'base',
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <ButtonBox type="button" css={styles(action, appearance, size)} {...props}>
      {children}
    </ButtonBox>
  );
}
