import TaskItem from "./TaskItem";
import "../styles/form-style.css";

export default function TasksList({ tasks, setTasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} item={task} setTasks={setTasks} />
      ))}
    </div>
  );
}
