import CtnNotExistTodo from "../Atoms/Container/CtnNotExistTodo";
import IcoTodoEmpty from "../Atoms/Icon/IcoTodoEmpty";
import TxtTodoEmpty from "../Atoms/Text/TxtTodoEmpty";

export default function TodoEmpty() {
  return (
    <CtnNotExistTodo>
      <IcoTodoEmpty />
      <TxtTodoEmpty />
    </CtnNotExistTodo>
  );
}
