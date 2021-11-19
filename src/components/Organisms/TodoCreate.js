import React, { useState, useRef, useCallback, useEffect } from "react";
import instance from "../../instance";
import { useTodoDispatch, useTodoNextId } from "../../TodoContext";
import { useUser } from "../../UserContext";
import BtnInCreateTodoWindow from "../Atoms/Button/BtnInCreateTodoWindow";
import TodoInsertForm from "../Molecules/TodoInsertForm";

function TodoCreate() {
  console.log("TodoCreate()");

  const [open, setOpen] = useState(false),
    [localOpen, setLocalOpen] = useState(open),
    [animate, setAnimate] = useState(false);

  const {
    id: userId,
    platform: userPlatform,
    nickname: userNickname,
  } = useUser();

  const dispatch = useTodoDispatch(),
    nextId = useTodoNextId();

  const textInput = useRef();

  const onToggle = useCallback(() => {
    setOpen(!open);
    if (animate) textInput.current.value = "";
  }, [open, animate]);

  const onSubmit = useCallback(
    (e) => {
      if (userId && userPlatform && userNickname) {
        const text = textInput.current.value;
        e.preventDefault();
        if (open && text) {
          const addTarget = {
            type: "CREATE_TODO",
            newtodo: {
              id: nextId.current,
              text,
              isDone: false,
            },
          };
          dispatch(addTarget);
          instance({
            method: "POST",
            url: "/api/createTodo",
            data: {
              userId,
              userPlatform,
              id: nextId.current,
              text,
              isDone: false,
            },
          });
          nextId.current += 1;
        }
        onToggle();
      }
    },
    [dispatch, nextId, onToggle, open, userId, userNickname, userPlatform]
  );

  useEffect(() => {
    if (open !== localOpen) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalOpen(open);
  }, [open, localOpen]);

  window.onkeydown = (e) => {
    e.key === "Enter" && !animate && !open && onToggle();
  };

  return (
    <>
      {(localOpen || animate) && (
        <TodoInsertForm onSubmit={onSubmit} open={open} textInput={textInput} />
      )}
      <BtnInCreateTodoWindow onToggle={onToggle} open={open} />
    </>
  );
}

export default React.memo(TodoCreate);
