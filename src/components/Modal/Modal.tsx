import React from 'react';
import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import FocusTrap from 'focus-trap-react';
import Box from '../Box';
import Overlay from '../Overlay';
import ModalContext from './ModalContext';
import { radii, breakpoints, sizes } from '../../tokens';
import type { BoxSize } from '../../core/types';
import useClickOutside from '../../hooks/useClickOutside';
import useEscapePressed from '../../hooks/useEscapePressed';

const ModalWrapper = styled(Box.withComponent('section'))<Partial<ModalProps>>`
  border-radius: ${radii.sm};
  background: hsl(0, 0%, 100%);
  box-shadow: 0 0 8px 2px hsla(0, 0%, 0%, 0.2);
  display: grid;
  grid-template-areas:
    'header  header'
    'body    body'
    'actions actions'
    'links   links';
  max-width: ${(props) =>
    sizes[typeof props.size === 'undefined' ? 'base' : props.size]};
  position: relative;
  width: 90vw;
  z-index: 100;

  @media (min-width: ${breakpoints.md}em) {
    grid-template-areas:
      'header header'
      'body   body'
      'links  actions';
  }
`;

// eslint-disable-next-line import/no-unused-modules
export interface ModalProps {
  /**
   * The title that shows up in the modal's header, unless overwritten.
   * This also sets the aria-label for the modal.
   */
  title: string;
  /** Whether the modal is visible on the page or not  */
  open?: boolean;
  /** Determine the size of the modal window */
  size?: BoxSize;
  /**
   * The content to display as the inside the modal.
   * This will usually include a ModalHeader, ModalBody, ModalLinks and ModalActions.
   */
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
  children: ReactNode;
}

export default function Modal({
  title,
  open = true,
  size = 'base',
  closeOnEscape = true,
  closeOnClickOutside = true,
  children
}: ModalProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(open);
  const closeModal = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const modalWrapperRef = React.useRef(null);
  // Listen for click events outside of the ModalWrapper and close the modal if they happen
  useClickOutside(modalWrapperRef, closeModal, closeOnClickOutside);
  // Listen for keyboard events and close the modal if the key is Escape and they're not typing
  useEscapePressed(closeModal, closeOnEscape);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open, setIsOpen]);

  return isOpen ? (
    <Overlay>
      <FocusTrap>
        <ModalWrapper
          ref={modalWrapperRef}
          aria-modal="true"
          aria-label={title}
          role="alertdialog"
          tabIndex={-1}
          size={size}
        >
          <ModalContext.Provider value={{ title, open: isOpen, closeModal }}>
            {children}
          </ModalContext.Provider>
        </ModalWrapper>
      </FocusTrap>
    </Overlay>
  ) : (
    <div />
  );
}
