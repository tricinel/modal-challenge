/* eslint-disable import/prefer-default-export */
const hideIconWarning = `You didn't hide the icon in the message (hideIcon=false). In future versions of Message, you will be required to explicitely use the icon inside the children.

  hideIcon will be deprecated in a future version of Message. See https://modal-challenge.netlify.app/changes/message-hide-icon-migration-guide.

  Proposed solution:
  * Set hideIcon to true
  * Pass the icon you wish to display as a child of Message`;

export { hideIconWarning };
