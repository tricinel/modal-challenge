import React from 'react';
import styled from '@emotion/styled';
import { colors, fontSizes, fonts, space } from '../../tokens';
import Box from '../Box';

const TextHintWrapper = styled(Box.withComponent('p'))`
  color: ${colors['black-200']};
  font-family: ${fonts.body};
  font-size: ${fontSizes.sm};
  font-weight: normal;
  margin: ${space.xs} 0;
  padding: 0;
`;

interface TextHintProps {
  /** The text content of the hint to display for the user */
  hint: string;
}

export default function TextHint({ hint }: TextHintProps): JSX.Element {
  return <TextHintWrapper>{hint}</TextHintWrapper>;
}
