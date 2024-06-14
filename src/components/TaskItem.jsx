import "../styles/form-style.css";

export default function TaskItem({ item, setTasks }) {
  function deleteTask(event) {
    event.preventDefault();

    setTasks([]);
  }

  return (
    <div className="task-item">
      <div className="task-item-name">
        {item.name}
        <span>
          <button className="delete-button" onClick={deleteTask}>
            x
          </button>
        </span>
      </div>

      <hr className="line" />
    </div>
  );
}
