import styled from '@emotion/styled';
import Box from '../Box';
import { colors, space, fontSizes, breakpoints, fonts } from '../../tokens';

const MessageBox = styled(Box.withComponent('div'))`
  align-items: baseline;
  color: ${colors['neutral-300']};
  display: flex;
  flex-direction: column;
  gap: ${space.xs};
  font-family: ${fonts.body};
  font-size: ${fontSizes.sm};
  text-align: center;
  padding: ${space.sm} 0;

  svg {
    align-self: center;
    width: ${fontSizes['3xl']};
  }

  @media (min-width: ${breakpoints.sm}em) {
    flex-direction: row;
    text-align: left;

    svg {
      align-self: left;
      width: ${fontSizes['2xl']};
    }
  }
`;

export default MessageBox;
