import { darken, lighten } from "polished";
import styled from "styled-components";

// CtnTodoList
// 분류 : 컨테이너
// 용도 : 투두리스트 컨테이너

const Styles = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  margin: 5px 10px 5px 0;
  overflow-y: auto;

  @media screen and (max-width: 700px) {
    padding: 12px 24px;
    padding-bottom: 32px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #85e7c9;
    border-radius: 50px;
    transition: 0.15s all ease-in;
    &:hover {
      background: ${lighten(0.1, "#85e7c9")};
    }
    &:active {
      background: ${darken(0.1, "#85e7c9")};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

export default function CtnTodoList({ children }) {
  return <Styles>{children}</Styles>;
}
