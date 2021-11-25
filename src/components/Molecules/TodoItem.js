import { useCallback, useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../Contexts/TodoContext";
import BtnRemoveTodo from "../Atoms/Button/BtnRemoveTodo";
import CtnTodoItemBlock from "../Atoms/Container/CtnTodoItemBlock";
import BtnTodoCheck from "../Atoms/Button/BtnTodoCheck";
import TxtTodoName from "../Atoms/Text/TxtTodoName";
import instance from "../../instance";
import { useUser } from "../Contexts/UserContext";

const Styles = styled.div`
  .BtnTodoCheck {
    margin-right: 20px;
    @media screen and (max-width: 700px) {
      margin-right: 12px;
    }
  }
`;

function TodoItem({ id, done, text }) {
  console.log("TodoItem()");

  const { id: userId, platform: userPlatform } = useUser();
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
      instance({
        method: "POST",
        url: "/api/deleteTodo",
        data: {
          userId,
          userPlatform,
          id,
        },
      });
    }, 250);
  }, [dispatch, id, userId, userPlatform]);

  const onCheck = useCallback(() => {
    dispatch({
      type: "CHECK_TODO",
      id,
      isDone: !done,
    });
    instance({
      method: "POST",
      url: "/api/changeTodoStatus",
      data: {
        userId,
        userPlatform,
        id,
        isDone: !done,
      },
    });
  }, [dispatch, done, id, userId, userPlatform]);

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

export default TodoItem;
