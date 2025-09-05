import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FortunePage from "./Components/FortunePage/FortunePage";
import Gallery from "./Components/Gallery/Gallery";
import Reminder from "./Components/Reminder/Reminder";
import Logout from "./Components/Logout/Logout";
import LuckyCharm from "./Components/LuckyCharm/LuckyCharm";
import { AuthProvider } from "./Components/Login/AuthContext";
import PrivateRoute from "./Components/Login/PrivateRoute";
import Wishing from "./Components/Wishing/Wishing";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/fortune"
              element={
                <PrivateRoute>
                  <FortunePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/reminder"
              element={
                <PrivateRoute>
                  <Reminder />
                </PrivateRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              }
            />
            <Route
              path="/lucky"
              element={
                <PrivateRoute>
                  <LuckyCharm />
                </PrivateRoute>
              }
            />
            <Route
              path="/wishing"
              element={
                <PrivateRoute>
                  <Wishing />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
