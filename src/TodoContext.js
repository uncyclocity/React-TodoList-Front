import { useReducer, createContext, useContext, useRef } from "react";

const initialState = [];

function reducer(todos, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return todos.concat(action.newtodo);
    case "REMOVE_TODO":
      return todos.filter((todo) => action.id !== todo.id);
    case "CHECK_TODO":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: action.isDone } : todo
      );
    default:
      throw new Error(`'${action.type}' 액션 타입은 핸들링되지 않았습니다.`);
  }
}

export const TodoDispatch = createContext(null);
export const Todos = createContext(null);
export const TodoNextId = createContext(null);

export default function TodoContext({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(0);

  return (
    <TodoDispatch.Provider value={dispatch}>
      <Todos.Provider value={todos}>
        <TodoNextId.Provider value={nextId}>{children}</TodoNextId.Provider>
      </Todos.Provider>
    </TodoDispatch.Provider>
  );
}

function notCtx() {
  throw new Error("Context를 찾을 수 없습니다.");
}

export function useTodoDispatch() {
  return useContext(TodoDispatch) || notCtx();
}

export function useTodos() {
  return useContext(Todos) || notCtx();
}

export function useTodoNextId() {
  return useContext(TodoNextId) || notCtx();
}
