import styled from '@emotion/styled';
import Box from '../Box';
import { colors, space, fontSizes, breakpoints, fonts } from '../../tokens';

const MessageBox = styled(Box.withComponent('div'))`
  align-items: baseline;
  color: ${colors['neutral-300']};
  display: flex;
  gap: ${space.xs};
  font-family: ${fonts.body};
  font-size: ${fontSizes.sm};
  padding: ${space.sm} 0;

  svg {
    width: ${fontSizes['3xl']};
  }

  @media (min-width: ${breakpoints.md}) {
    svg {
      width: ${fontSizes['2xl']};
    }
  }
`;

export default MessageBox;
