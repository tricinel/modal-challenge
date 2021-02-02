import React from 'react';
import styled from '@emotion/styled';
import Box from '../Box';
import { colors, fontSizes, fonts, space, radii } from '../../tokens';
import Message from '../Message';

const ValidationMessageWrapper = styled(Box.withComponent('div'))`
  background-color: ${colors['destructive-100']};
  border: 1px solid ${colors['destructive-200']};
  border-radius: ${radii.xs};
  color: ${colors['destructive-300']};
  gap: ${space.lg};
  font-family: ${fonts.body};
  font-size: ${fontSizes.sm};
  font-weight: normal;
  margin: ${space.xs} 0;
  padding: 0 ${space.xs};
`;

interface TextHintProps {
  /** A list of error messages that we display using the Message component */
  messages: string[];
}

export default function ValidationMessage({
  messages
}: TextHintProps): JSX.Element {
  return (
    <ValidationMessageWrapper>
      {messages.map((message) => (
        <Message key={message} status="destructive">
          {message}
        </Message>
      ))}
    </ValidationMessageWrapper>
  );
}
