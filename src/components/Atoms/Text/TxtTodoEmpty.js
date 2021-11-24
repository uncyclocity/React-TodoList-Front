import styled from "styled-components";

// TxtTodoEmpty
// 분류 : 텍스트
// 용도 : 투두가 비었음을 나타내는 메세지

const Styles = styled.div`
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export default function TxtTodoEmpty() {
  return (
    <Styles>
      오늘은 어떠한 일들이
      <br />
      기다리고 있나요 ?-?
    </Styles>
  );
}
