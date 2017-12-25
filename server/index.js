const express = require("express");
const graphqlHttp = require("express-graphql");
const { json } = require("body-parser");
const cors = require("cors");
const { buildSchema } = require("graphql");
const quote = require("./quotes");

const port = 3001;

const app = express();

app.use(cors());
app.use(json());

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  next();
});

const schema = buildSchema(`
    type Query {
        quote: String,
    }
`);

const root = {
  quote: () => JSON.stringify(quote)
};

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
