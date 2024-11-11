import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 8080;

const todos = [
  { id: uuidv4(), title: "Todo 1", description: "Desc of todo 1" },
];

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

app.put("/update-todo", (req, res) => {
  try {
    const { id, title, description } = req.body;

    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, description };
      } else {
        return todo;
      }
    });
    return res.status(200).json({
      msg: `Update todo ${id}`,
    });
  } catch (error) {
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
