const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const graphql = require("./graphql/index");

const port = 3001;

const app = express();

app.use(cors());
app.use(json());

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  next();
});

app.use("/graphql", graphql);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
