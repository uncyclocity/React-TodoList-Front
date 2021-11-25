import { MdDone } from "react-icons/md";
import styled, { css } from "styled-components";

// BtnTodoCheck
// 분류 : 버튼
// 용도 : 투두 체크 버튼

const Styles = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.25s all ease-in-out;

  &:hover {
    box-shadow: 0 0 8px 0 #38d9a9;
  }

  &:active {
    box-shadow: 0 0 8px 0 #38d9a9;
  }

  @media screen and (max-width: 700px) {
    width: 24px;
    height: 24px;
  }

  ${({ done }) =>
    done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

export default function BtnTodoCheck({ done, onCheck }) {
  return (
    <Styles done={done} onClick={onCheck}>
      {done && <MdDone />}
    </Styles>
  );
}
