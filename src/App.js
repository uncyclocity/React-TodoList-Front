import { createGlobalStyle } from "styled-components";
import LoginingPageTemplate from "./components/Templates/LoginingPageTemplate";
import LoginPageTemplate from "./components/Templates/LoginPageTemplate";
import TodoPageTemplate from "./components/Templates/TodoPageTemplate";
import TodoContext from "./TodoContext";
import { Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";

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

    display: flex;
    justify-content: center;
    margin-top: 96px;
    margin-bottom: 32px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContext>
        <TodoContext>
          <Routes>
            <Route path="/" exact={true} element={<TodoPageTemplate />} />
            <Route path="/login" element={<LoginPageTemplate />} />
            <Route path="/logining" element={<LoginingPageTemplate />} />
          </Routes>
        </TodoContext>
      </UserContext>
    </>
  );
}

export default App;
