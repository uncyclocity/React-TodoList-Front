import styled from "styled-components";

// TxtTodayMonthAndDate
// 분류 : 텍스트
// 용도 : 오늘의 날짜(요일 제외)를 헤드에 표시

const Styles = styled.div`
  font-size: 36px;
  color: #343a40;
  font-family: "NanumSquareEB";

  @media screen and (max-width: 700px) {
    font-size: 27px;
  }
`;

export default function TxtTodayMonthAndDate({ dateString }) {
  return <Styles>{dateString}</Styles>;
}
