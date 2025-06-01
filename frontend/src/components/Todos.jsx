


function Todos({todos}) {
    function markAsComplete(id) {
        fetch("http://localhost:3000/completed", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify({ id })
        })
        .then(res => res.json())
        .then(data => {
        alert(data.msg);
        });
    }
    return <div>
        {todos.map(function (todo){
            return <div> <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => markAsComplete(todo._id)}>{todo.completed == true ? "✅completed" : "mark as complete"}</button>
            </div> })}        
    </div>
}

export { Todos };