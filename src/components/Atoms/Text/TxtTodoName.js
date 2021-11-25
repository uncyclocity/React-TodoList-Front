import styled, { css } from "styled-components";

// TxtTodoName
// 분류 : 텍스트
// 용도 : 투두 내용

const Styles = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  display: flex;
  align-items: center;
  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
    `}

  @media screen and (max-width: 700px) {
    font-size: 17px;
  }
`;

export default function TxtTodoName({ done, text }) {
  return <Styles done={done}>{text}</Styles>;
}
