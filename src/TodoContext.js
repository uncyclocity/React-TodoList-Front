import { useReducer, createContext } from "react";

const initialState = {
  todos: [],
  notDone: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        todos: state.todos.concat(action.newtodo),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => action.id !== todo.id),
      };
    case "CHECK_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: action.isDone } : todo
        ),
      };
    case "REFRESH_ISDONE":
      return {
        ...state,
        notDone: state.todos.filter((todo) => !todo.isDone).length,
      };
    default:
      return state;
  }
}

export const UserDispatch = createContext(null);
export const UserState = createContext(null);

function TodoContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserDispatch.Provider value={dispatch}>
      <UserState.Provider value={state}>{children}</UserState.Provider>
    </UserDispatch.Provider>
  );
}

export default TodoContext;
