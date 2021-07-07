import React, { useContext } from "react";
import styled from "styled-components";
import { MdAddCircleOutline } from "react-icons/md";
import { UserState } from "../TodoContext";

const TodoHeadStyle = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    font-size: 21px;
    color: #868e96;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    .addIcon {
      font-size: 20px;
      transform: translate(0, 16%);
    }
  }
`;

function TodoHead() {
  console.log("TodoHead()");

  const state = useContext(UserState),
    todosLen = state.todos.length,
    notDone = state.notDone;

  const today = new Date();

  const year = today.getFullYear(),
    month = today.getMonth() + 1,
    date = today.getDate(),
    day = today.getDay();

  const dayArr = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  return (
    <TodoHeadStyle>
      <h1>
        {year}년 {month}월 {date}일
      </h1>
      <div className="day">{dayArr[day]}</div>
      <div className="tasks-left">
        {todosLen > 0 && notDone === 0 && "모든 할일을 마치셨어요!"}
        {todosLen === 0 && notDone === 0 && (
          <div>
            <span>하단의 </span>
            <MdAddCircleOutline className="addIcon" />
            <span>버튼을 눌러 할일을 추가해보세요!</span>
          </div>
        )}
        {todosLen > 0 && notDone !== 0 && notDone + "개의 할일이 남았네요!"}
      </div>
    </TodoHeadStyle>
  );
}

export default React.memo(TodoHead);
