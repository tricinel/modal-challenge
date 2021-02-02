import styled from '@emotion/styled';
import Box from '../Box';
import { space, breakpoints } from '../../tokens';

/*
 * The ModalActions component represents a section of the footer within a Modal.
 * It is meant to encompass primary action buttons or links that are meant to have a high visual emphasis.
 * The container is placed to the right of the Modal window, in the footer, in tablet and desktop devices,
 * and to the left on smaller devices.
 * The ModalActions can be the only actions container in a Modal.
 */
const ModalActions = styled(Box)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  gap: ${space.xs};
  grid-area: actions;
  justify-content: left;
  padding: ${space.xs} ${space.lg};

  @media (min-width: ${breakpoints.md}em) {
    justify-content: right;
    flex-direction: row-reverse;
  }
`;

export default ModalActions;
