import styled from "styled-components";

// TxtTaskGuide
// 분류 : 텍스트
// 용도 : 헤드에 표시되는 작업 가이드

const Styles = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
  .addIcon {
    font-size: 20px;
    transform: translate(0, 16%);
  }
`;

export default function TxtTaskGuide({ msg }) {
  return <Styles>{msg}</Styles>;
}
