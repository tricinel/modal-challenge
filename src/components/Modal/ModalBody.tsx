import styled from '@emotion/styled';
import { colors, space } from '../../tokens';

/*
 * The ModalBody component represents the main section a Modal.
 * It is meant to encompass the content of the modal.
 * It has a maximum height beyond which the content will scroll.
 * The container is in between the ModalHeader and the ModalFooter.
 */
const ModalBody = styled.div`
  border-bottom: 1px solid ${colors['black-100']};
  border-top: 1px solid ${colors['black-100']};
  box-sizing: border-box;
  grid-area: body;
  max-height: 80vh;
  overflow-y: auto;
  padding: ${space.xs} ${space.lg};

  &:last-child {
    border-bottom: 0;
  }

  &:first-child {
    border-top: 0;
  }
`;

export default ModalBody;
