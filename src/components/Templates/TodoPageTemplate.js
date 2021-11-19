import TodoHead from "../Organisms/TodoHead";
import TodoList from "../Organisms/TodoList";
import TodoCreate from "../Organisms/TodoCreate";
import CtnWindow from "../Atoms/Container/CtnWindow";

export default function TodoPageTemplate() {
  return (
    <CtnWindow>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </CtnWindow>
  );
}
