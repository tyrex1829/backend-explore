import express from "express";
import fetchData from "./fetch.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Landing Page");
});

app.get("/data", async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
