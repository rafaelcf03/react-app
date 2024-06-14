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
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [index, setIndex] = useState(1);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    setTasks([...tasks, { id: index, name: task }]);
    setTask("");
    setIndex(index + 1);
  }

  return (
    <div className="App">
      <Header />
      <form noValidate className="form">
        <Stack direction="row" spacing={{ xs: 0, md: 2 }} useFlexGap>
          <TextField
            variant="outlined"
            label="Add new task"
            value={task}
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
      <TasksList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}
