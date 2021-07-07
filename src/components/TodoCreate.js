import React, { useState, useRef, useCallback, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdAdd } from "react-icons/md";
import { darken, lighten } from "polished";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const slideUp = keyframes`
  from {
    transform: translateY(5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(5px);
    opacity: 0;
  }
`;

const CircleButton = styled.div`
  background: #38d9a9;
  &:hover {
    background: ${lighten(0.1, "#38d9a9")};
  }
  &:active {
    background: ${darken(0.1, "#38d9a9")};
  }

  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;

  font-size: 60px;
  color: white;

  z-index: 5;
  position: absolute;
  left: 88%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px 0 #38d9a9;
  transition: 0.15s all ease-in-out;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      box-shadow: 0 0 8px 0 #ff6b6b;
      &:hover {
        background: ${lighten(0.1, "#ff6b6b")};
      }
      &:active {
        background: ${lighten(0.1, "#ff6b6b")};
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;

  animation-duration: 0.25s;
  animation-name: ${slideUp};
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  console.log("TodoCreate()");

  const [open, setOpen] = useState(false);
  const [localOpen, setLocalOpen] = useState(open);
  const [animate, setAnimate] = useState(false);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const textInput = useRef();

  const onToggle = useCallback(() => setOpen(!open), [open]);

  const onSubmit = useCallback(
    (e) => {
      if (open) {
        const text = textInput.current.value,
          isDone = false;

        e.preventDefault();

        dispatch({
          type: "CREATE_TODO",
          newtodo: {
            id: nextId.current,
            text,
            isDone,
          },
        });

        onToggle();
        nextId.current += 1;
      }
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
