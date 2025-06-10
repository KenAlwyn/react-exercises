import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserManagementPage from "./pages/UserManagementPage";
import WeatherPage from "./pages/WeatherPage";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user-mgt" replace />} />
        <Route path="/user-mgt" element={<UserManagementPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
