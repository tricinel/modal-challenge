/*
 * The premise is that we realised the Message component is a bit too restrictive because
 * we tied the icon type to the status of the Message.
 * This means that if consumers want to add their own icons to the Message, they first need to pass hideIcon=true,
 * and then add their icon as a child. Not everyting can be a child of a paragraph, so this raises some concerns.
 *
 * So the plan is to introduce a better way to handle this case.
 *
 * We could of course create another component from scratch and slowly migrate users to the new one and off of this one.
 * Let's try extending this component though.
 *
 * First, we turn the paragraph into a div and style it accordingly.
 *
 * If users set hideIcon to true, nothing changes for them and add the children in the right place.
 *
 * If users left hideIcon to false, warn them in the console that in future version they will be required to use their own icon
 * and render the icon based on the status as before.
 *
 * A future version might rename hideIcon to __UNSAFE__hideIcon and warn them of that when it's being used.
 *
 * And yet a later version will remove __UNSAFE__hideIcon and users will get an error in their editors when they use it.
 * Plus, it will not affect what is rendered on the screen at this point anyway.
 *
 * The end result is there should be no visual difference from before.
 *
 * This is of course a convoluted process for such a simple change, but it's meant to show what other changes can look like.
 *
 * The basic idea is to try as much as possible to backport all existing functionality from the old component to the new component,
 * while warning the consumers of the component of the changes, giving them a proposed way forward and proper time to adapt their code.
 *
 * A detrimental change might simply take the old component and map properties to the new component and just create that instead.
 * We'd need to be careful to have the new component _look and work just like_ the old one during the deprecation period.
 *
 * Since we're talking API, TypeScript will show a nice warning to anyone using the component right in their editor,
 * while Storybook is still thinking about adding support to parse the @@deprecated tag.
 * See: https://github.com/storybookjs/storybook/issues/9721
 */

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
import { hideIconWarning } from './deprecations';
import logger from '../../core/logger';

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
  /**
   * Whether the icon should be displayed or not
   * @deprecated This will go away
   */
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
  // If they didn't explicitly hide the icon, warn them it's going away
  if (!hideIcon) {
    logger.error(hideIconWarning);
  }

  return (
    <MessageBox {...props}>
      {!hideIcon && renderIcon(status)}
      {children}
    </MessageBox>
  );
}
