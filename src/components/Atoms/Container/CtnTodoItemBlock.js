import styled, { css } from "styled-components";
import { slideUp, slideDown } from "../../../keyfremes/slide";

// CtnTodoItemBlock
// 분류 : 컨테이너
// 용도 : 투두 컨테이너

const Styles = styled.div`
  display: flex;
  align-itmes: center;
  padding: 12px 0 12px 0;

  animation: 0.25s ease-out 0s ${slideUp};
  animation-fill-mode: forwards;

  ${({ rmCnt }) =>
    rmCnt &&
    css`
      animation-name: ${slideDown};
    `}
`;

export default function CtnTodoItemBlock({ children, rmCnt }) {
  return <Styles rmCnt={rmCnt}>{children}</Styles>;
}
