import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import TodoItem from "./TodoItem";
import { IoIosCloudOutline } from "react-icons/io";
import { useTodos } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  margin: 5px 10px 5px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #85e7c9;
    border-radius: 50px;
    transition: 0.15s all ease-in-out;
    &:hover {
      background: ${lighten(0.1, "#85e7c9")};
    }
    &:active {
      background: ${darken(0.1, "#85e7c9")};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

const NotExist = styled.div`
  height: 100%;

  color: #abb0b6;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50%
    display: inline-flex;
    text-align: center;
  }

  .todoIcon {
    width: 100%;
    font-size: 100px;
  }
`;

function TodoList() {
  console.log("TodoList()");

  const todos = useTodos();

  if (todos.length <= 0)
    return (
      <TodoListBlock>
        <NotExist>
          <div>
            <IoIosCloudOutline className="todoIcon" />
            오늘은 어떠한 일들이
            <br />
            기다리고 있나요 ?-?
          </div>
        </NotExist>
      </TodoListBlock>
    );

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.isDone}
          text={todo.text}
        />
      ))}
    </TodoListBlock>
  );
}

export default React.memo(TodoList);
