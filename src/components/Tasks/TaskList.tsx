import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TaskCard } from "./TaskCard";
import { TaskForm } from "./TaskForm";
import type { Task } from "../../types";

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState<Task | undefined>(undefined);

  const handleSave = (task: Task) => {
    if (editTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setEditTask(undefined);
  };

  const handleDelete = (id: number) =>
    setTasks(tasks.filter((t) => t.id !== id));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)", // fill height minus navbar
        width: "100vw",
        backgroundColor: "#f9f9f9", // optional, looks cleaner
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Tasks
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          + Add Task
        </Button>
        <Box sx={{ mt: 2 }}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={(t) => {
                setEditTask(t);
                setOpen(true);
              }}
              onDelete={handleDelete}
            />
          ))}
        </Box>
        <TaskForm
          open={open}
          onClose={() => {
            setOpen(false);
            setEditTask(undefined);
          }}
          onSave={handleSave}
          task={editTask}
        />
      </Box>
    </Box>
  );
};
