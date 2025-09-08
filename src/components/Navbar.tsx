import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Todo App</Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
            <Button color="inherit" onClick={() => { logout(); navigate("/login"); }}>Logout</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
