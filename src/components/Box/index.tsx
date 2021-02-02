import styled from '@emotion/styled';

const Box = styled('div')`
  appearance: none;
  box-sizing: border-box;
  line-height: 1;
  outline: 0;

  &::after,
  &::before {
    box-sizing: border-box;
  }
`;

export default Box;
