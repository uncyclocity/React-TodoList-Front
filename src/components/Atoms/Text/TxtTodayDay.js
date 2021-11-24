import styled from "styled-components";

// TxtTodayDay
// 분류 : 텍스트
// 용도 : 오늘의 요일을 헤드에 표시

const Styles = styled.div`
  font-size: 21px;
  color: #868e96;

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export default function TxtTodayDay({ day }) {
  return <Styles>{day}</Styles>;
}
