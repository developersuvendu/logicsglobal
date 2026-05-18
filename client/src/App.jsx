import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Layout
import Layout from "./components/Layout/Layout";

// Main Pages
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/attendance/Attendance";
import Inventory from "./pages/inventory/Inventory";
import Social from "./pages/social/Social";
import Tasks from "./pages/tasks/Tasks";

// My HR Pages
import MyHRLayout from "./pages/myhr/MyHRLayout";
import Leave from "./pages/myhr/Leave";
import Documents from "./pages/myhr/Documents";
import Onboarding from "./pages/myhr/Onboarding";
import FlightTickets from "./pages/myhr/FlightTickets";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="myhr" element={<MyHRLayout />}>
              <Route index element={<Navigate to="leave" replace />} />

              <Route path="leave" element={<Leave />} />

              <Route path="documents" element={<Documents />} />

              <Route path="onboarding" element={<Onboarding />} />

              <Route path="flight-tickets" element={<FlightTickets />} />
            </Route>

            <Route path="attendance" element={<Attendance />} />

            <Route path="inventory" element={<Inventory />} />

            <Route path="social" element={<Social />} />

            <Route path="task" element={<Tasks />} />
          </Route>
        </Route>

        {/* Default Route */}

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Invalid Routes */}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
