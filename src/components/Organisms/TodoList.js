import { useEffect } from "react";
import TodoItem from "../Molecules/TodoItem";
import {
  useTodoDispatch,
  useTodos,
  useTodoNextId,
} from "../Contexts/TodoContext";
import CtnTodoList from "../Atoms/Container/CtnTodoList";
import TodoEmpty from "../Molecules/TodoEmpty";
import instance from "../../instance";
import { useUser } from "../Contexts/UserContext";

function TodoList() {
  console.log("TodoList()");

  const todos = useTodos();
  const { id: userId, platform: userPlatform } = useUser();
  const todoDispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  useEffect(() => {
    instance({
      method: "POST",
      url: "/get/todos",
      data: {
        userId,
        userPlatform,
      },
    }).then((res) => {
      todoDispatch({
        type: "INIT_TODO",
        initTodo: res.data,
      });
      if (res.data.length > 0) {
        nextId.current = parseInt(res.data[res.data.length - 1].id) + 1;
      }
    });
  }, [nextId, todoDispatch, userId, userPlatform]);

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

export default TodoList;
