import "./Taskstats.css";

export default function TaskStats({ tasks }) {

  const total = tasks.length;
  const todo = tasks.filter(t => t.status === "todo").length;
  const progress = tasks.filter(t => t.status === "progress").length;
  const done = tasks.filter(t => t.status === "done").length;

  return (
    <div className="task-stats">

      <h3>Task Statistics</h3>

      <div className="stats-container">

        <div className="stat-box">
          <h4>Total Tasks</h4>
          <p>{total}</p>
        </div>

        <div className="stat-box">
          <h4>Todo</h4>
          <p>{todo}</p>
        </div>

        <div className="stat-box">
          <h4>In Progress</h4>
          <p>{progress}</p>
        </div>

        <div className="stat-box">
          <h4>Completed</h4>
          <p>{done}</p>
        </div>

      </div>

    </div>
  );
}