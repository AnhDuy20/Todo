import "./MainContentStyle.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { ITask } from "../SaveLoad/SaveLoad";

type IMainContent = {
  task: ITask;
  onDelete: (id: string | undefined) => void;
  onComplete: (id: string | undefined) => void;
};

export function MainContent({ task, onDelete, onComplete }: IMainContent) {
  return (
    <div className="task">
      <button className="checkContainer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>

      <button className="deleteButton" onClick={() => onDelete(task.id)}>
        <FaTrash size={20} />
      </button>
    </div>
  );
}

export default MainContent;
