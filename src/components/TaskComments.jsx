import { useState } from "react";

export default function TaskComments(){

const [comments,setComments] = useState([]);
const [text,setText] = useState("");

const addComment = ()=>{

const newComment = {
message:text,
time:new Date().toLocaleString()
};

setComments([...comments,newComment]);
setText("");

};

return(

<div>

<h4>Comments</h4>

{comments.map((c,i)=>(
<p key={i}>{c.message}</p>
))}

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Write comment"
/>

<button onClick={addComment}>
Add
</button>

</div>

);

}