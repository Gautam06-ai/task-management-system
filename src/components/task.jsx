import { useState } from "react";
import KanbanBoard from "./KanbanBoard";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import "./kanban.css";

export default function Task({ tasks, setTasks }) {

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Task">

      <SearchBar setSearch={setSearch} />

      <TaskForm tasks={tasks} setTasks={setTasks} />

      <KanbanBoard tasks={filteredTasks} setTasks={setTasks} />

    </div>
  );
}