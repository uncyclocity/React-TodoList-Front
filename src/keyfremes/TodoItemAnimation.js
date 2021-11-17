import { keyframes } from "styled-components";

export const slideUp = keyframes`
  from {
    transform: translateY(5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
  }
`;

export const slideDown = keyframes`
  from {
    transform: translateY(0px);
    height: 34px;
  }

  to {
    transform: translateY(5px);
    padding: 0;
    opacity: 0;
    height: 0;
  }
`;
