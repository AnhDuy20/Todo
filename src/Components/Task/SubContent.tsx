import MainContent from "../MainContent/MainContent";
import { ITask } from "../SaveLoad/SaveLoad";
import "./SubContentStyle.css";

type ISubContent = {
  tasks: ITask[];
  onDelete: (id: string | undefined) => void;
  onComplete: (id: string | undefined) => void;
};

export function SubContent({ tasks, onDelete, onComplete }: ISubContent) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="tasks">
      <header className="header">
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className="textPurple">Completed tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>
      <div className="list">
        {tasks.map((task) => (
          <MainContent
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
}
