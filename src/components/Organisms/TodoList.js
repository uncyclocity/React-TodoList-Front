import React from "react";
import TodoItem from "../Molecules/TodoItem";
import { useTodos } from "../../TodoContext";
import CtnTodoList from "../Atoms/Container/CtnTodoList";
import TodoEmpty from "../Molecules/TodoEmpty";

function TodoList() {
  console.log("TodoList()");

  const todos = useTodos();

  if (todos.length <= 0)
    return (
      <CtnTodoList>
        <TodoEmpty />
      </CtnTodoList>
    );

  return (
    <CtnTodoList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.isDone}
          text={todo.text}
        />
      ))}
    </CtnTodoList>
  );
}

export default React.memo(TodoList);
