import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import "./home.css";

import TaskStats from "./dashboard/TaskStats";
import ActivityChart from "./dashboard/ActivityChart";
import RecentTasks from "./dashboard/RecentTasks";
import Task from "./components/task";
import Project from "./Project";

import { initialTasks } from "./data/tasks";

export default function HomePage() {

  const location = useLocation();

  const username =
    location.state?.username || localStorage.getItem("username") || "";

  const [showPopup, setShowPopup] = useState(!username);
  const [showLogout, setShowLogout] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  // GLOBAL TASK STATE
  const [tasks, setTasks] = useState(initialTasks);

  const handleLogin = (email) => {
    localStorage.setItem("username", email);
    setShowPopup(false);
  };

  return (
    <div className="container">

      {/* Login Popup */}
      {showPopup && (
        <LoginPopup
          onClose={() => setShowPopup(false)}
          onLogin={handleLogin}
        />
      )}

      {/* Logout Popup */}
      {showLogout && (
        <div className="logout-overlay">

          <div className="logout-popup">

            <h3>Logout</h3>
            <p>Are you sure you want to logout?</p>

            <div className="popup-buttons">

              <button
                className="cancel"
                onClick={() => setShowLogout(false)}
              >
                Cancel
              </button>

              <button
                className="logout"
                onClick={() => {
                  localStorage.removeItem("username");
                  localStorage.removeItem("user");

                  setShowLogout(false);
                  setShowPopup(true);
                  window.location.reload();
                }}
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      )}

      {/* Navbar */}
      <div className="navbar">

        <h2>TaskManager</h2>

        <div className="nav-right">
          <span>Welcome 👤 {username}</span>
        </div>

      </div>

      <div className="main">

        {/* Sidebar */}
        <div className="sidebar">

          <ul>

            <li onClick={() => setActivePage("dashboard")}>
              Dashboard
            </li>

            <li onClick={() => setActivePage("tasks")}>
              Task List
            </li>

            <li onClick={() => setActivePage("projects")}>
              Projects
            </li>

            <li onClick={() => setShowLogout(true)}>
              Logout
            </li>

          </ul>

        </div>

        {/* Content */}
        <div className="content">

          {activePage === "dashboard" && (
            <>
              <h1>Dashboard</h1>
              <TaskStats tasks={tasks} />
              <ActivityChart tasks={tasks} />
              <RecentTasks tasks={tasks} />
            </>
          )}

          {activePage === "tasks" && (
            <>
              <h1>Task List</h1>
              <Task tasks={tasks} setTasks={setTasks} />
            </>
          )}

          {activePage === "projects" && (
            <>
              <h1>Projects</h1>
              <h3>No projects found.</h3>
              <Project />
            </>
          )}

        </div>

      </div>

    </div>
  );
}