import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Task } from "../../types";

type Props = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
};

export const TaskCard = ({ task, onEdit, onDelete }: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body2">{task.description}</Typography>
        </Box>
        <Box>
          <IconButton onClick={() => onEdit(task)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
