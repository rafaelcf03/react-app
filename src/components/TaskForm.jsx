import { useState } from "react";
import TasksList from "./TasksList";
import Header from "./Header";
import {
  TextField,
  Button,
  FormControl,
  Stack,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "../styles/form-style.css";

export default function TaskForm() {
  const [index, setIndex] = useState(1);
  const [task, setTask] = useState({ id: index, name: "", done: false });
  const [tasks, setTasks] = useState([]);

  // sourcery skip: avoid-function-declarations-in-blocks
  function handleChange(event) {
    setTask({ id: index, name: event.target.value, done: false });
  }

  function submitForm(event) {
    event.preventDefault();

    if (tasks.find((item) => item.name === task.name)) {
      alert("Item ja existe");
    } else {
      setTasks([...tasks, task]);
      setTask({ id: index, name: "", done: false }); // clear text field
      setIndex(index + 1);
    }
  }

  return (
    <div className="App">
      <Header />
      <form noValidate className="form">
        <Stack direction="row" spacing={{ xs: 0, md: 2 }} useFlexGap>
          <TextField
            variant="outlined"
            label="Add new task"
            value={task.name}
            onChange={handleChange}
            size="normal"
          />
          <Button
            onClick={submitForm}
            variant="contained"
            size="small"
            color="secondary"
            endIcon={<SendIcon />}
          >
            Add task
          </Button>
        </Stack>
      </form>
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
