import styled, { css } from "styled-components";
import {
  slideUp,
  slideDown,
} from "../../../keyfremes/TodoCreateWindowAnimation";

// CtnInsertForm
// 분류 : 컨테이너
// 용도 : 투두 입력폼

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;

  border-radius: 0 0 16px 16px;
  border-top: 1px solid #e9ecef;

  animation: 0.25s ease-out 0s ${slideUp};
  animation-fill-mode: forwards;

  @media screen and (max-width: 700px) {
    padding: 24px 24px 64px 24px;
  }

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

export default function CtnInsertForm({ onSubmit, disappear, children }) {
  return (
    <InsertFormPositioner>
      <InsertForm onSubmit={onSubmit} disappear={disappear}>
        {children}
      </InsertForm>
    </InsertFormPositioner>
  );
}
