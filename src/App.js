import { createGlobalStyle } from "styled-components";
import LoginPageTemplate from "./components/Templates/LoginPageTemplate";
import TodoPageTemplate from "./components/Templates/TodoPageTemplate";
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
      <TodoContext>
        {/* <LoginPageTemplate /> */}
        <TodoPageTemplate />
      </TodoContext>
    </>
  );
}

export default App;
