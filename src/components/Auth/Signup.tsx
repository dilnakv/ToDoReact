import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    localStorage.setItem("user_" + username, password);
    alert("Signup successful! Please login.");
  };

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
    <Paper sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>Signup</Typography>
      <TextField
        fullWidth margin="normal" label="Username"
        value={username} onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth margin="normal" type="password" label="Password"
        value={password} onChange={(e) => setPassword(e.target.value)}
      />
      <Button fullWidth variant="contained" onClick={handleSignup}>Signup</Button>
    </Paper>
    </Box>
  );
};
