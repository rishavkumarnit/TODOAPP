const express = require("express");
const {createTodo, updateTodo} = require("./types"); 
const app = express();
const {todo} = require("./db");
const cors = require("cors");

const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
     const createPayLoad = req.body;
     const parsedPayLoad = createTodo.safeParse(createPayLoad);
     if(!parsedPayLoad.success){
        return res.status(411).json({msg: "wrong inputs"});
     }
   
   // for testing purpose limit the number of todo to 5
   const totalTodos = await todo.countDocuments();
    if (totalTodos >= 5) {
      const oldestTodo = await todo.findOne().sort({});
      if (oldestTodo) {
         await todo.deleteOne({ _id: oldestTodo._id });
      }
    }

   await todo.create({
      title: createPayLoad.title,
      description: createPayLoad.description
   })
   return res.json({msg: "todo created"});

})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    return res.json(todos)
})

app.put("/completed", async function(req, res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        return res.status(411).json({msg: "wrong inputs"});
     }
     await todo.updateOne({_id: req.body.id}, {
      completed: true
     });
   return res.json({msg: "marked completed"});
})

app.listen(3000);