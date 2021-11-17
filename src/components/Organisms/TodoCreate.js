import React, { useState, useRef, useCallback, useEffect } from "react";
import { useTodoDispatch, useTodoNextId } from "../../TodoContext";
import BtnInCreateTodoWindow from "../Atoms/Button/BtnInCreateTodoWindow";
import TodoInsertForm from "../Molecules/TodoInsertForm";

function TodoCreate() {
  console.log("TodoCreate()");

  const [open, setOpen] = useState(false),
    [localOpen, setLocalOpen] = useState(open),
    [animate, setAnimate] = useState(false);

  const dispatch = useTodoDispatch(),
    nextId = useTodoNextId();

  const textInput = useRef();

  const onToggle = useCallback(() => {
    setOpen(!open);
    if (animate) textInput.current.value = "";
  }, [open, animate]);

  const onSubmit = useCallback(
    (e) => {
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
        nextId.current += 1;
      }
      onToggle();
    },
    [dispatch, nextId, onToggle, open]
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
