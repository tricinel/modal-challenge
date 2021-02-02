import styled from '@emotion/styled';
import Box from '../Box';
import { space } from '../../tokens';

/*
 * The ModalLinks component represents a section of the footer within a Modal.
 * It is meant to encompass secondary action buttons or links that are meant to have a low visual emphasis.
 * The container is placed to the left of the Modal window, in the footer.
 * The ModalLinks should not be the only actions in a Modal.
 */
const ModalLinks = styled(Box)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  gap: ${space.xs};
  grid-area: links;
  justify-content: left;
  padding: ${space.xs} ${space.lg};
`;

export default ModalLinks;
