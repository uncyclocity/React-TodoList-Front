import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { createGlobalStyle } from "styled-components";
import LoginingPage from "./components/Pages/LoginingPage";
import LoginPage from "./components/Pages/LoginPage";
import TodoPage from "./components/Pages/TodoPage";
import TodoContext from "./components/Contexts/TodoContext";
import UserContext from "./components/Contexts/UserContext";

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
    margin-top: 90px;
    margin-bottom: 60px;
  }
`;

function App() {
  const [nowPage, setNowPage] = useState("");

  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

  useEffect(() => {
    let storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken || code) {
      setNowPage("logining");
    } else {
      setNowPage("login");
    }
  }, [code]);

  return (
    <>
      <GlobalStyle />
      <UserContext>
        <TodoContext>
          {nowPage === "todo" && <TodoPage />}
          {nowPage === "login" && <LoginPage />}
          {nowPage === "logining" && <LoginingPage setNowPage={setNowPage} />}
        </TodoContext>
      </UserContext>
    </>
  );
}

export default App;
