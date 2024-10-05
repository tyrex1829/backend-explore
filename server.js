import express from "express";

const app = express();
const port = 3001;

app.use(function (req, res, next) {
  req.name = "Tyrex";
  console.log("Accessed");
  next();
});

function logRequest(req, res, next) {
  const d = new Date();
  console.log(`method: ${req.method}, url: ${req.url}, timestamp: ${d}`);
  next();
}

let noOfReq = 0;

app.use(function countRequest(req, res, next) {
  noOfReq = noOfReq + 1;
  console.log(noOfReq);
  next();
});

app.get("/", (req, res) => {
  res.send(
    `<h1>There are four routes you can hit.</h1>
    <h3><li>multiply</li>
    <li>add</li>
    <li>divide</li>
    <li>subtract</li></h3>`
  );
});

app.get("/count-request", logRequest, (req, res) => {
  res.send(`Total number of requests sent to server: ${noOfReq}`);
});

app.get("/special", logRequest, (req, res) => {
  res.send("This is route specific middleware.");
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
