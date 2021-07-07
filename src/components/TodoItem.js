import React, { useCallback, useContext, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { UserDispatch } from "../TodoContext";

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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: 0.25s all ease-in-out;

  color: #dee2e6;
  &:hover {
    color: #ff6b6b;
  }

  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-itmes: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${slideUp};

  ${(props) =>
    props.rmCnt &&
    css`
      animation-name: ${slideDown};
    `}
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
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

  const dispatch = useContext(UserDispatch);
  const [rmCnt, setRmCnt] = useState(false);

  const onRefreshNum = useCallback(() => {
    dispatch({ type: "REFRESH_ISDONE" });
  }, [dispatch]);

  const onRemove = useCallback(() => {
    const rmTarget = {
      type: "REMOVE_TODO",
      id,
    };
    setRmCnt(true);
    setTimeout(() => {
      dispatch(rmTarget);
      onRefreshNum();
    }, 250);
  }, [dispatch, id, onRefreshNum]);

  const onCheck = useCallback(() => {
    dispatch({
      type: "CHECK_TODO",
      id,
      isDone: !done,
    });
    onRefreshNum();
  }, [dispatch, done, id, onRefreshNum]);

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
