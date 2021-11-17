import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

// BtnInCreateTodoWindow
// 분류 : 버튼
// 용도 : 투두 생성 창의 생성/취소 버튼

const btnColor = (color) => {
  return css`
    background: ${color};
    &:hover {
      background: ${lighten(0.1, color)};
    }
    &:active {
      background: ${darken(0.1, color)};
    }
    box-shadow: 0 0 8px 0 ${color};
  `;
};

const Styles = styled.div`
  ${btnColor("#38d9a9")}

  width: 80px;
  height: 80px;
  border-radius: 50%;

  cursor: pointer;

  position: absolute;
  left: 88%;
  bottom: 0px;

  transition: 0.15s all ease-in;

  transform: translate(-50%, 50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 60px;
  color: white;

  ${(props) =>
    props.open &&
    css`
      ${btnColor("#ff6b6b")}
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

export default function BtnInCreateTodoWindow({ onToggle, open }) {
  return (
    <Styles onClick={onToggle} open={open}>
      <MdAdd />
    </Styles>
  );
}
