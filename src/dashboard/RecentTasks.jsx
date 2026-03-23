import "./RecentTasks.css";

export default function RecentTasks({ tasks }) {

  const recentTasks = [...tasks].slice(-5).reverse();

  return (
    <div className="recent-tasks">

      <h3>Recent Tasks</h3>

      <table className="tasks-table">

        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {recentTasks.map((task) => (
            <tr key={task.id}>

              <td>{task.title}</td>

              <td>
                <span className={`status ${task.status}`}>
                  {task.status}
                </span>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}