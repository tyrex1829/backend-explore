import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send(
    `<h1>There are four routes you can hit.</h1>
    <h3><li>multiply</li>
    <li>add</li>
    <li>divide</li>
    <li>subtract</li></h3>`
  );
});

app.get("/add", (req, res) => {
  res.send("");
});

app.get("/subtract", (req, res) => {
  res.send("");
});

app.get("/multiply", (req, res) => {
  res.send("");
});

app.get("/divide", (req, res) => {
  res.send("");
});

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
