import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../../TodoContext";
import BtnRemoveTodo from "../Atoms/Button/BtnRemoveTodo";
import CtnTodoItemBlock from "../Atoms/Container/CtnTodoItemBlock";
import BtnTodoCheck from "../Atoms/Button/BtnTodoCheck";
import TxtTodoName from "../Atoms/Text/TxtTodoName";

const Styles = styled.div`
  .BtnTodoCheck {
    margin-right: 20px;
  }
`;

function TodoItem({ id, done, text }) {
  console.log("TodoItem()");

  const dispatch = useTodoDispatch();
  const [rmCnt, setRmCnt] = useState(false);
  const [isViewRmBtn, setIsViewRmBtn] = useState(false);

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
    <Styles
      onMouseEnter={() => setIsViewRmBtn(true)}
      onMouseLeave={() => setIsViewRmBtn(false)}
    >
      <CtnTodoItemBlock rmCnt={rmCnt}>
        <div className="BtnTodoCheck">
          <BtnTodoCheck done={done} onCheck={onCheck} />
        </div>
        <TxtTodoName done={done} text={text} />
        {isViewRmBtn && <BtnRemoveTodo onRemove={onRemove} />}
      </CtnTodoItemBlock>
    </Styles>
  );
}

export default React.memo(TodoItem);
