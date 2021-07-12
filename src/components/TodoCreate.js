import React, { useState, useRef, useCallback, useEffect } from "react";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";
import styled, { css, keyframes } from "styled-components";
import { darken, lighten } from "polished";
import { MdAdd } from "react-icons/md";

const slideUpped = css`
  transform: translateY(0px);
`;

const slideDowned = css`
  transform: translateY(5px);
  opacity: 0;
`;

const slideUp = keyframes`
  from { ${slideDowned} }
  to { ${slideUpped} }
`;

const slideDown = keyframes`
  from { ${slideUpped} }
  to { ${slideDowned} }
`;

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

const CircleButton = styled.div`
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

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;

  border-radius: 0 0 16px 16px;
  border-top: 1px solid #e9ecef;

  animation: 0.25s ease-out 0s ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  console.log("TodoCreate()");

  const [open, setOpen] = useState(false),
    [localOpen, setLocalOpen] = useState(open),
    [animate, setAnimate] = useState(false);

  const dispatch = useTodoDispatch(),
    nextId = useTodoNextId();

  const textInput = useRef();

  const onToggle = useCallback(() => {
    setOpen(!open);
    if (animate) textInput.current.value = "";
  }, [open, animate]);

  const onSubmit = useCallback(
    (e) => {
      const text = textInput.current.value;

      e.preventDefault();

      if (open && text) {
        const addTarget = {
          type: "CREATE_TODO",
          newtodo: {
            id: nextId.current,
            text,
            isDone: false,
          },
        };

        dispatch(addTarget);
        nextId.current += 1;
      }
      onToggle();
    },
    [dispatch, nextId, onToggle, open]
  );

  useEffect(() => {
    if (open !== localOpen) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalOpen(open);
  }, [open, localOpen]);

  window.onkeydown = (e) => {
    e.key === "Enter" && !animate && !open && onToggle();
  };

  return (
    <>
      {(localOpen || animate) && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit} disappear={!open}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter을 누르세요"
              ref={textInput}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
