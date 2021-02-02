import React from 'react';
import styled from '@emotion/styled';
import Button from '../Button';
import CloseIcon from '../../icons/CloseIcon';
import { space, fonts, fontSizes, colors } from '../../tokens';
import Box from '../Box';
import ModalContext from './ModalContext';

const ModalHeaderWrapper = styled(Box.withComponent('header'))`
  align-items: center;
  border-bottom: 1px solid ${colors['black-100']};
  box-sizing: border-box;
  display: flex;
  grid-area: header;
  justify-content: space-between;
  padding: ${space.xs} ${space.lg};
`;

const ModalTitle = styled('p')`
  font-family: ${fonts.heading};
  font-size: ${fontSizes.lg};
  color: ${colors['neutral-300']};
`;

// eslint-disable-next-line import/no-unused-modules
export interface ModalHeaderProps {
  /** The title content that displays in the header */
  title?: string;
  /** Whether to hide the close button in the header */
  hideClose?: boolean;
}

/*
 * We check to see if a string is defined and has a length.
 * We handle it like this because basically Typescript can't properly figure out if something is a string or not
 */
function strHasLength(str: string | undefined): str is string {
  return typeof str !== 'undefined' && str.length > 0;
}

/*
 * Generally, the title of the modal should come from the Modal props themselves.
 * The title is what is used to provide an aria label for the modal element.
 * We might however want to pass in a custom title for the header, something other than that aria label.
 */
function whichTitle(ctxTitle: string | undefined, title: string): string {
  return title.length === 0 && strHasLength(ctxTitle) ? ctxTitle : title;
}

/*
 * The ModalHeader component represents the header within a Modal.
 * It is meant to encompass a title and optionally a Close button.
 */
export default function ModalHeader({
  title = '',
  hideClose = false
}: ModalHeaderProps): JSX.Element {
  return (
    <ModalContext.Consumer>
      {({ title: ctxTitle, closeModal }) => (
        <ModalHeaderWrapper>
          <ModalTitle>{whichTitle(ctxTitle, title)}</ModalTitle>
          {!hideClose && (
            <Button
              action="neutral"
              appearance="ghost"
              onClick={closeModal}
              aria-label="Close"
            >
              <CloseIcon />
            </Button>
          )}
        </ModalHeaderWrapper>
      )}
    </ModalContext.Consumer>
  );
}
