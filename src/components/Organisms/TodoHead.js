import { MdAddCircleOutline } from "react-icons/md";
import { useTodos } from "../../TodoContext";
import React from "react";
import CtnTodoHead from "../Atoms/Container/CtnTodoHead";
import TxtTaskGuide from "../Atoms/Text/TxtTaskGuide";
import TodoHeadTodayInfo from "../Molecules/TodoHeadTodayInfo";

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
    <CtnTodoHead>
      <TodoHeadTodayInfo dateString={dateString} day={day} />
      <TxtTaskGuide msg={message()} />
    </CtnTodoHead>
  );
}

export default React.memo(TodoHead);
