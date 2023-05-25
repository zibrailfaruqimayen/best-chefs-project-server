const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const data = require("./data/data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("chef data....");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const chefData = data.find((d) => d.id === id);
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`chef API :${port}`);
});
