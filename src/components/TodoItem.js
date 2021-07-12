import React, { useCallback, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

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
    height: 34px;
  }

  to {
    transform: translateY(5px);
    padding: 0;
    opacity: 0;
    height: 0;
  }
`;

const Remove = styled.div`
  display: none;

  font-size: 24px;
  cursor: pointer;
  transition: 0.25s all ease-in;

  color: #dee2e6;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-itmes: center;
  padding: 12px 0 12px 0;

  &:hover {
    ${Remove} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  animation: 0.25s ease-out 0s ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.rmCnt &&
    css`
      animation-name: ${slideDown};
    `}
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 20px;

  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.25s all ease-in-out;

  &:hover {
    box-shadow: 0 0 8px 0 #38d9a9;
  }

  &:active {
    box-shadow: 0 0 8px 0 #38d9a9;
  }

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  console.log("TodoItem()");

  const dispatch = useTodoDispatch();

  const [rmCnt, setRmCnt] = useState(false);

  const onRemove = useCallback(() => {
    setRmCnt(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_TODO",
        id,
      });
    }, 250);
  }, [dispatch, id]);

  const onCheck = useCallback(() => {
    dispatch({
      type: "CHECK_TODO",
      id,
      isDone: !done,
    });
  }, [dispatch, done, id]);

  return (
    <TodoItemBlock rmCnt={rmCnt}>
      <CheckCircle done={done} onClick={onCheck}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
