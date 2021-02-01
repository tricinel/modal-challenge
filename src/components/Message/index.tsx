import React from 'react';
import type { ReactNode } from 'react';
import { css } from '@emotion/react';
import type { Action } from '../../core/types';
import MessageBox from './Message';
import InfoIcon from '../../icons/InfoIcon';
import WarningIcon from '../../icons/WarningIcon';
import CheckIcon from '../../icons/CheckIcon';
import BellIcon from '../../icons/BellIcon';
import { colors } from '../../tokens';
import type { Colors } from '../../tokens/colors';

/*
  Given a status, we want to display the appropriate icon next to the message content.
  Since the status is one of the available colors, we're also going to use the status to color the icon.
*/
function renderIcon(status: Action): JSX.Element {
  const svgStyles = css`
    path {
      fill: ${colors[`${status}-300` as keyof Colors]};
    }
  `;

  switch (status) {
    case 'information':
      return <InfoIcon width="1em" css={svgStyles} />;
    case 'destructive':
      return <WarningIcon width="1em" css={svgStyles} />;
    case 'confirmation':
      return <CheckIcon width="1em" css={svgStyles} />;
    default:
      return <BellIcon width="1em" css={svgStyles} />;
  }
}

// eslint-disable-next-line import/no-unused-modules
export interface MessageProps {
  /** Determine the associated icon as well as its visual style */
  status?: Action;
  /** Whether the icon should be displayed or not */
  hideIcon?: boolean;
  /** The content to display as the message */
  children: ReactNode;
}

/**
 * Messages are ideal for calling the user's attention on a certain part of the page.
 * They use the various statuses available throughout the component library to convey information,
 * depending on what the user **is about to do**.
 */
export default function Message({
  status = 'neutral',
  children,
  hideIcon = false,
  ...props
}: MessageProps): JSX.Element {
  return (
    <MessageBox {...props}>
      {!hideIcon && renderIcon(status)}
      <p>{children}</p>
    </MessageBox>
  );
}
