import styled from "styled-components";
import { IoIosCloudOutline } from "react-icons/io";

// IcoTodoEmpty
// 분류 : 아이콘
// 용도 : 투두가 비었음을 나타내는 메세지 위의 구름그림

const Styles = styled.div`
  font-size: 100px;
  height: 100px;
`;

export default function IcoTodoEmpty() {
  return (
    <Styles>
      <IoIosCloudOutline />
    </Styles>
  );
}
