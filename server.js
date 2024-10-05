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

app.use(function (req, res, next) {
  req.name = "Tyrex";
  console.log("Accessed");
  next();
});

app.get("/add", (req, res) => {
  console.log(req.name);

  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/subtract", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a - b,
  });
});

app.get("/multiply", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a * b,
  });
});

app.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a / b,
  });
});

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
