import "./TodoStyle.css";
import { PlusCircleOutlined } from "@ant-design/icons";
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
    <header className="headerStyle">
      <form onSubmit={handleSubmit} className="formStyle">
        <input
          placeholder="Bạn muốn làm gì ?"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Tạo mới <PlusCircleOutlined />
        </button>
      </form>
    </header>
  );
}

export default Todo;
