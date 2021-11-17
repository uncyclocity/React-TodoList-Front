import CtnInsertForm from "../Atoms/Container/CtnInsertForm";
import IptNewTodo from "../Atoms/Input/IptNewTodo";

export default function TodoInsertForm({ onSubmit, open, textInput }) {
  return (
    <CtnInsertForm onSubmit={onSubmit} disappear={!open}>
      <IptNewTodo textInput={textInput} />
    </CtnInsertForm>
  );
}
