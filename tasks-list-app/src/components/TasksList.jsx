import TaskItem from "./TaskItem";
import "../styles/form-style.css";

export default function TasksList({ tasks, setTasks }) {
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} item={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}
