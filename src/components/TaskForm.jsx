import { useState } from "react";


export default function TaskForm({ tasks, setTasks }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssigned] = useState("");
  const [tags, setTags] = useState("");

  const addTask = () => {

    if (!title || !dueDate || !assignedTo) {
      alert("Please fill all required fields");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title,
      description: "",
      priority,
      dueDate,
      assignedTo,
      tags: tags ? tags.split(",").map(tag => tag.trim()) : [],
      status: "todo",
      comments: []
    };

    setTasks([...tasks, newTask]);

    // reset form
    setTitle("");
    setPriority("medium");
    setDueDate("");
    setAssigned("");
    setTags("");
  };

  return (

    <div className="task-form">

      <h2>Create Task</h2>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <input
        placeholder="Assign user"
        value={assignedTo}
        onChange={(e) => setAssigned(e.target.value)}
      />

      <input
        placeholder="tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

    </div>
  );
}