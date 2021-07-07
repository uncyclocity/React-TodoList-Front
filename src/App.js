import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import TodoContext from "./TodoContext";

// 전역적으로 스타일 적용하기 : createGlobalStyle 활용
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoContext>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoContext>
      </TodoTemplate>
    </>
  );
}

export default App;
