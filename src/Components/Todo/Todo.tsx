import "./TodoStyle.css";
import { useState } from "react";

type ITodo = {
  handleAddTask?: (title?: string) => void;
};

export function Todo({ handleAddTask }: ITodo) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (handleAddTask) handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className="headerSty">
      <form onSubmit={handleSubmit} className="formStyle">
        <input
          placeholder="Bạn muốn làm gì ?"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
      </form>
    </header>
  );
}

export default Todo;
