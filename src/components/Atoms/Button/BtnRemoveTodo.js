import { MdDelete } from "react-icons/md";
import styled from "styled-components";

// BtnRemoveTodo
// 분류 : 버튼
// 용도 : 투두 삭제 버튼

const Styles = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: 0.25s all ease-in;

  color: #dee2e6;

  &:hover {
    color: #ff6b6b;
  }
`;

export default function BtnRemoveTodo({ onRemove }) {
  return (
    <Styles onClick={onRemove}>
      <MdDelete />
    </Styles>
  );
}
