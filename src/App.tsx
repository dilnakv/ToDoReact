import { Routes, Route, Navigate } from "react-router-dom";
import { Signup } from "./components/Auth/Signup";
import { Login } from "./components/Auth/Login";
import { TaskList } from "./components/Tasks/TaskList";
import { Navbar } from "./components/Navbar";
import { AuthProvider, useAuth } from "./context/AuthContext";
import type { JSX } from "react";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/tasks"
            element={<PrivateRoute><TaskList /></PrivateRoute>}
          />
        </Routes>
    </AuthProvider>
  );
}

export default App;
