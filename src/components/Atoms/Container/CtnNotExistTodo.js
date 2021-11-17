import styled from "styled-components";
import { fadeIn } from "../../../keyfremes/TodoListAnimation";

// CtnNotExistTodo
// 분류 : 컨테이너
// 용도 : 투두리스트에 투두가 존재하지 않을 경우, '존재하지 않음' 메세지가 띄워지는 컨테이너

const Styles = styled.div`
  height: 100%;

  color: #abb0b6;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 0.25s ease-out 0s ${fadeIn};
  animation-fill-mode: forwards;
`;

export default function CtnNotExistTodo({ children }) {
  return <Styles>{children}</Styles>;
}
