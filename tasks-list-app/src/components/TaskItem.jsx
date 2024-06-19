import "../styles/form-style.css";
import { Checkbox, Button, Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskItem({ item, tasks, setTasks }) {
  // sourcery skip: avoid-function-declarations-in-blocks
  function deleteTask(item) {
    setTasks(tasks.filter((task) => task.name !== item.name));
  }

  function markDone(item) {
    setTasks(
      tasks.map((task) =>
        task.name === item.name && item.id === task.id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  return (
    <div className="task-item">
      <div className="task-item-name">
        <Checkbox
          onChange={() => markDone(item)}
          color="secondary"
          size="medium"
        />
        <span className={item.done ? "completed" : "text-list"}>
          {item.name}
        </span>
        <span className="delete-button">
          <IconButton size="medium" onClick={() => deleteTask(item)}>
            <DeleteIcon fontSize="medium" color="secondary" />
          </IconButton>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
}
