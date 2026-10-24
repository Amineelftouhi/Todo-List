import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { AddTask } from "./pages/AddTask";
import { About } from "./pages/About";


function App() {
  return (
    <Routes>

      {/* Redirect / to /login */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />


      {/* Routes before login */}
      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={<Login />}
        />
      </Route>


      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>

        {/* Routes inside the app */}
        <Route element={<AppLayout />}>

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

          <Route
            path="/tasks/add"
            element={<AddTask />}
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Route>

      </Route>


    </Routes>
  );
}

export default App;