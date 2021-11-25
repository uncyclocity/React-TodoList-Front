import styled from "styled-components";

// IptNewTodo
// 분류 : 인풋
// 용도 : 새로운 투두 입력란

const Styles = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;

export default function IptNewTodo({ textInput }) {
  return (
    <Styles
      autoFocus
      placeholder="할 일을 입력 후, Enter을 누르세요"
      ref={textInput}
    ></Styles>
  );
}
