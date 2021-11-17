import styled from "styled-components";

// CtnTodoHead
// 분류 : 컨테이너
// 용도 : 투두 창 최상단의 날짜 및 가이드 텍스트 표시 부분 (헤드)

const Styles = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
`;

export default function CtnTodoHead({ children }) {
  return <Styles>{children}</Styles>;
}
