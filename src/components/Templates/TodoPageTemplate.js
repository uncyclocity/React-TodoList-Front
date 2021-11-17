import styled from "styled-components";
import TodoHead from "../Organisms/TodoHead";
import TodoList from "../Organisms/TodoList";
import TodoCreate from "../Organisms/TodoCreate";
import CtnWindow from "../Atoms/Container/CtnWindow";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 96px;
  margin-bottom: 32px;
`;

export default function TodoPageTemplate() {
  return (
    <Styles>
      <CtnWindow>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </CtnWindow>
    </Styles>
  );
}
