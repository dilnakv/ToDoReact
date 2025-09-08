import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import type { Task } from "../../types";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task;
};

export const TaskForm = ({ open, onClose, onSave, task }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Reset form when task changes or dialog opens
  useEffect(() => {
    if (open) {
      setTitle(task?.title || "");
      setDescription(task?.description || "");
    }
  }, [task, open]);

  const handleSave = () => {
    onSave({
      id: task?.id || Date.now(),
      title,
      description,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{task ? "Edit Task" : "New Task"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          {task ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
