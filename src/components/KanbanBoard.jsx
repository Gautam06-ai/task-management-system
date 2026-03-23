import "./kanban.css";
import TaskCard from "./TaskCard";

export default function KanbanBoard({tasks,setTasks}){

const moveTask = (id,newStatus)=>{

const updatedTasks = tasks.map(task =>
task.id === id ? {...task,status:newStatus} : task
);

setTasks(updatedTasks);

};

const todo = tasks.filter(t=>t.status==="todo");
const progress = tasks.filter(t=>t.status==="progress");
const done = tasks.filter(t=>t.status==="done");

return(

<div className="kanban">

<div className="column">

<h2>TODO</h2>

{todo.map(task=>(
<TaskCard
key={task.id}
task={task}
moveTask={moveTask}
/>
))}

</div>

<div className="column">

<h2>IN PROGRESS</h2>

{progress.map(task=>(
<TaskCard
key={task.id}
task={task}
moveTask={moveTask}
/>
))}

</div>

<div className="column">

<h2>DONE</h2>

{done.map(task=>(
<TaskCard
key={task.id}
task={task}
moveTask={moveTask}
/>
))}

</div>

</div>

);

}