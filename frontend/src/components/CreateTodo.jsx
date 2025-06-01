import { useState } from "react";

function CreateTodo(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    return <div>
        <input type = "text" placeholder = "title" onChange={function(e){
            setTitle(e.target.value)
        }}></input>
        <br/>
        <input type = "text" placeholder = "description" onChange={function(e){
            setDescription(e.target.value);
        }}></input>
        <button onClick={() => { fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(
    async function( response){
     await response.json();
   alert("todo added")
  }
 )}}>Add a Todo</button>
    </div>
}

export { CreateTodo };