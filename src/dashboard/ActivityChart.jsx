import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

// import { initialTasks } from "../data/tasks";

export default function ActivityChart({tasks}) {

  const todo = tasks.filter(task => task.status === "todo").length;
  const progress = tasks.filter(task => task.status === "progress").length;
  const completed = tasks.filter(task => task.status === "done").length;

  const data = [
    { status: "Todo", tasks: todo },
    { status: "Progress", tasks: progress },
    { status: "Completed", tasks: completed }
  ];

  return (
    <div
      style={{
        background: "#fff",
        margin: "20px 0",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
      }}
    >
      <h3>Task Activity</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" />
          <Line type="monotone" dataKey="tasks" stroke="#4f46e5" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}