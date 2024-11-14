import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 8080;

let todos = [{ id: uuidv4(), title: "Todo 1", description: "Desc of todo 1" }];

app.use(express.json());

app.get("/todos", (req, res) => {
  try {
    return res.status(200).json({
      todos: todos,
    });
  } catch (error) {
    return res.status(404).json({
      msg: `Error getting all the todos`,
    });
  }
});

app.post("/new-todo", (req, res) => {
  try {
    const { title, description } = req.body;

    const newTodo = {
      id: uuidv4(),
      title,
      description,
    };

    todos.push(newTodo);
    return res.status(200).json({
      msg: `Pushed new todo`,
    });
  } catch (error) {
    return res.status(404).json({
      msg: `Can't push new todo`,
    });
  }
});

app.patch("/update-todo/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log("run1");

    const { updateTitle = "", updateDescription = "" } = req.body;
    console.log("run2");

    todos = todos.map((todo) => {
      console.log("run3");
      if (todo.id === id) {
        console.log("run4");
        return { ...todo, title: updateTitle, description: updateDescription };
      } else {
        console.log("run5");
        return todo;
      }
    });
    console.log("run6");
    return res.status(200).json({
      msg: `Update todo ${id}`,
    });
  } catch (error) {
    console.log("run err");
    return res.status(404).json({
      msg: `Can't update the todo`,
    });
  }
});

app.delete("/delete-todo/:id", (req, res) => {
  try {
    const { id } = req.params;

    todos = todos.filter((todo) => todo.id !== id);

    return res.status(200).json({
      msg: `Deleted todo ${id}`,
    });
  } catch (error) {
    return res.status(404).json({
      msg: `Can't delete ${id}`,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
