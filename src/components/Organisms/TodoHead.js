import { MdAddCircleOutline } from "react-icons/md";
import { useTodos } from "../../TodoContext";
import styled from "styled-components";
import React from "react";

const TodoHeadStyle = styled.div`
  padding: 48px 32px 24px 32px;
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

  const todos = useTodos(),
    notDone = todos.filter((todo) => !todo.isDone).length,
    todosLen = todos.length;

  const today = new Date(),
    day = today.toLocaleDateString("ko-KR", { weekday: "long" }),
    dateString = today.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const zeroTodo_msg = (
      <div>
        <span>하단의 </span>
        <MdAddCircleOutline className="addIcon" />
        <span>버튼을 눌러 할일을 추가해보세요!</span>
      </div>
    ),
    message = () => {
      if (notDone <= 0) {
        if (todosLen > 0) return "모든 할일을 마치셨어요!";
        else return zeroTodo_msg;
      } else return notDone + "개의 할일이 남았네요!";
    };

  return (
    <TodoHeadStyle>
      <h1>{dateString}</h1>
      <div className="day">{day}</div>
      <div className="tasks-left">{message()}</div>
    </TodoHeadStyle>
  );
}

export default React.memo(TodoHead);
