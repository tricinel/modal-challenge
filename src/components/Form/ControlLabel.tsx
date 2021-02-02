import React from 'react';
import styled from '@emotion/styled';
import { StarIcon } from '../../icons';
import { colors, fontSizes, fonts } from '../../tokens';
import type { ControlLabelProps, RequiredIndicatorType } from './types';
import Box from '../Box';

const ControlLabelBox = styled(Box.withComponent('label'))`
  color: ${colors['neutral-300']};
  cursor: default;
  display: block;
  font-family: ${fonts.body};
  font-weight: bold;
  font-size: ${fontSizes.sm};

  svg {
    color: ${colors['destructive-300']};
    width: 0.48em;
  }
`;

/*
 * The RequiredText will display either (required) or (optional)
 * next to the label text.
 */
const RequiredText = styled('span')`
  font-weight: normal;
  font-size: ${fontSizes.xs};
`;

/*
 * We determine what to show next to the label.
 * If the field is required, we show either the StarIcon or (required).
 * If the field is not required, but we are forced to show a text and not the icon,
 * we show (optional).
 */
function withIndicator(
  required: boolean,
  type: RequiredIndicatorType,
  alwaysShow: boolean
): JSX.Element | null {
  const text = required ? '(required)' : '(optional)';
  if (required && type === 'icon') {
    return <StarIcon />;
  }

  if ((required || alwaysShow) && type === 'text') {
    return <RequiredText>{text}</RequiredText>;
  }

  return null;
}

export default function ControlLabel({
  isRequired = false,
  label,
  requiredIndicatorType = 'icon',
  alwaysShowRequiredIndicator = false,
  children
}: ControlLabelProps): JSX.Element {
  return (
    <ControlLabelBox>
      {label}{' '}
      {withIndicator(
        isRequired,
        requiredIndicatorType,
        alwaysShowRequiredIndicator
      )}
      {children}
    </ControlLabelBox>
  );
}
