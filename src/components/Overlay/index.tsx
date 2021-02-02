import styled from '@emotion/styled';

/*
 * This is the container that will be placed between the Modal and the rest of the page.
 * It is a full width full height container overlaid on the primary window, rendering the content underneath inert.
 */
const Overlay = styled.div`
  align-items: center;
  background: hsla(0, 0%, 100%, 0.64);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 50;
`;

export default Overlay;
