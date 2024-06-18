import "../styles/form-style.css";

export default function TaskItem({ item, tasks, setTasks }) {
  // sourcery skip: avoid-function-declarations-in-blocks
  function deleteTask(item) {
    setTasks(tasks.filter((task) => task.name !== item.name));
  }

  function markDone(item) {
    setTasks(
      tasks.map((task) =>
        task.name === item.name ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="task-item">
      <div className="task-item-name">
        <span
          className={item.done ? "completed" : ""}
          onClick={() => markDone(item)}
        >
          {item.name}
        </span>
        <span>
          <button className="delete-button" onClick={() => deleteTask(item)}>
            x
          </button>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
}
