import TaskComments from "./TaskComments";

export default function TaskCard({ task, moveTask }) {

  return (

    <div className={`task ${task.priority}`}>

      <h3>{task.title}</h3>

      <p>Priority: {task.priority}</p>

      <p>Due: {task.dueDate}</p>

      <p>Assigned: {task.assignedTo}</p>

      <div className="tags">
        {task.tags?.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="task-actions">

        {task.status === "todo" && (
          <button onClick={() => moveTask(task.id, "progress")}>
            Start
          </button>
        )}

        {task.status === "progress" && (
          <button onClick={() => moveTask(task.id, "done")}>
            Complete
          </button>
        )}

      </div>

      {/* Comments section */}
      <TaskComments taskId={task.id} />

    </div>

  );
}