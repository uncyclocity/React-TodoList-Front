import { css, keyframes } from "styled-components";

const slideUpped = css`
  transform: translateY(0px);
`;

const slideDowned = css`
  transform: translateY(5px);
  opacity: 0;
`;

export const slideUp = keyframes`
  from { ${slideDowned} }
  to { ${slideUpped} }
`;

export const slideDown = keyframes`
  from { ${slideUpped} }
  to { ${slideDowned} }
`;
