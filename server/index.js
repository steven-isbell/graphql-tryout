const express = require("express");
const graphqlHttp = require("express-graphql");
const { json } = require("body-parser");
const { buildSchema } = require("graphql");

const port = 3001;

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String,
    }
`);

const root = {
  hello: () => "Hello world!"
};

app.use(json());

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
